import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signin(data: SignInDto) {
    console.log({ data });
    return 'signin';
  }

  async signup(data: SignUpDto) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
        username: data.username,
      },
    });
    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists');
    }

    const newUser = await this.prismaService.user.create({ data });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      username: newUser.username,
    };
  }
}
