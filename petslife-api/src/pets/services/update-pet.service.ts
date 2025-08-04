import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePetDto } from '../dto/update-pet.dto';

@Injectable()
export class UpdatePetService {
  constructor(private prisma: PrismaService) {}

  async updatePet(petId: number, dto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id: petId },
      data: dto,
      select: {
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
        photo: true,
      },
    });
  }
}
