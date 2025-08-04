import { Module } from '@nestjs/common';
import { CreatePetService } from './services/create-pet.service';
import { GetPetService } from './services/get-pet.service';
import { UpdatePetService } from './services/update-pet.service';
import { DeletePetService } from './services/delete-pet.service';
import { PetsController } from './controller/pets.controller';

@Module({
  controllers: [PetsController],
  providers: [
    CreatePetService,
    GetPetService,
    UpdatePetService,
    DeletePetService,
  ],
})
export class PetsModule {}
