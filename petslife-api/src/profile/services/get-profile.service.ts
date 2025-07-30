import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number, isVet: boolean) {
    if (isVet) {
      return this.prisma.veterinarian.findUnique({
        where: { id: userId },
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
      return this.prisma.user.findUnique({
        where: { id: userId },
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
