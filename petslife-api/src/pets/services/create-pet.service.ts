import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from '../dto/create-pet.dto';

@Injectable()
export class CreatePetService {
  constructor(private prismaService: PrismaService) {}

  async createPet(userId: number, data: CreatePetDto) {
    const newPet = await this.prismaService.pet.create({
      data: {
        ...data,
        userId,
      },
    });
    return newPet;
  }
}
