import { Module } from '@nestjs/common';
import { CreatePetService } from './services/create-pet.service';
import { PetsController } from './controller/pets.controller';

@Module({
  controllers: [PetsController],
  providers: [CreatePetService],
})
export class PetsModule {}
