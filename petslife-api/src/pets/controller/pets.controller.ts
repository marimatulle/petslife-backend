import { Request } from 'express';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePetService } from '../services/create-pet.service';
import { GetPetService } from '../services/get-pet.service';
import { UpdatePetService } from '../services/update-pet.service';
import { DeletePetService } from '../services/delete-pet.service';
import { CreatePetDto } from '../dto/create-pet.dto';
import { UpdatePetDto } from '../dto/update-pet.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('pets')
export class PetsController {
  constructor(
    private readonly createPetService: CreatePetService,
    private readonly getPetService: GetPetService,
    private readonly updatePetService: UpdatePetService,
    private readonly deletePetService: DeletePetService,
  ) {}

  @Post()
  async createPet(@Req() req: Request, @Body() body: CreatePetDto) {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.createPetService.createPet(userId, body);
  }

  @Get(':petId')
  async getPetById(@Param('petId', ParseIntPipe) petId: number) {
    return this.getPetService.getPet(petId);
  }

  @Get()
  async getAllPets() {
    return this.getPetService.getPet();
  }

  @Patch(':petId')
  async updatePet(
    @Param('petId', ParseIntPipe) petId: number,
    @Body() body: UpdatePetDto,
  ) {
    return this.updatePetService.updatePet(petId, body);
  }

  @Delete(':petId')
  async deletePet(
    @Param('petId', ParseIntPipe) petId: number,
    @Req() req: Request,
  ) {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.deletePetService.deletePet(petId, userId);
  }
}
