import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeletePetService {
  constructor(private prisma: PrismaService) {}

  async deletePet(petId: number, userId: number) {
    const pet = await this.prisma.pet.findUnique({
      where: { id: petId },
    });

    if (!pet) {
      throw new NotFoundException(`Pet with ID ${petId} not found`);
    }

    if (pet.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to delete this pet',
      );
    }

    return this.prisma.pet.delete({
      where: { id: petId },
    });
  }
}
