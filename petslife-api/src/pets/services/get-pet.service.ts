import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetPetService {
  constructor(private prisma: PrismaService) {}

  async getPet(petId?: number) {
    const selectFields = {
      id: true,
      animalName: true,
      animalBirthDate: true,
      animalAge: true,
      animalSpecies: true,
      animalColor: true,
      animalBreed: true,
      animalSex: true,
      animalWeight: true,
      isNeutered: true,
      preExistingConditions: true,
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    };

    if (petId) {
      return this.prisma.pet.findUnique({
        where: { id: petId },
        select: selectFields,
      });
    }

    return this.prisma.pet.findMany({
      select: selectFields,
    });
  }
}
