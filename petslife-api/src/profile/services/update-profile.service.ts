import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileDto } from '../dto/update-profile.dto';

@Injectable()
export class UpdateProfileService {
  constructor(private prisma: PrismaService) {}

  async updateProfile(userId: number, isVet: boolean, dto: UpdateProfileDto) {
    if (isVet) {
      return this.prisma.veterinarian.update({
        where: { id: userId },
        data: dto,
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          photo: true,
          crmv: true,
        },
      });
    } else {
      return this.prisma.user.update({
        where: { id: userId },
        data: dto,
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          photo: true,
        },
      });
    }
  }
}
