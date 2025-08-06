import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto, SignUpDto, UserRole } from '../dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signin(data: SignInDto) {
    const orConditions = [];
    if (data.email) {
      orConditions.push({ email: data.email });
    }
    if (data.username) {
      orConditions.push({ username: data.username });
    }

    let user = await this.prismaService.user.findFirst({
      where: {
        OR: orConditions,
      },
    });

    if (!user) {
      user = await this.prismaService.veterinarian.findFirst({
        where: {
          OR: orConditions,
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      crmv: 'crmv' in user ? user.crmv : undefined,
      role: 'crmv' in user ? 'veterinarian' : 'user',
    });

    return {
      accessToken,
    };
  }

  async signup(data: SignUpDto) {
    const userAlreadyExists = await this.prismaService.user.findFirst({
      where: {
        OR: [{ email: data.email }, { username: data.username }],
      },
    });
    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword: string = await bcrypt.hash(data.password, 10);

    if (data.role === UserRole.VETERINARIAN) {
      if (!data.crmv || !data.crmv.trim()) {
        throw new BadRequestException('CRMV is required for veterinarians');
      }
      const newVet = await this.prismaService.veterinarian.create({
        data: {
          name: data.name,
          email: data.email,
          username: data.username,
          crmv: data.crmv,
          password: hashedPassword,
        },
      });
      return {
        id: newVet.id,
        name: newVet.name,
        email: newVet.email,
        username: newVet.username,
        crmv: newVet.crmv,
        role: UserRole.VETERINARIAN,
      };
    } else {
      const newUser = await this.prismaService.user.create({
        data: {
          name: data.name,
          email: data.email,
          username: data.username,
          password: hashedPassword,
        },
      });
      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
        role: UserRole.USER,
      };
    }
  }
}
