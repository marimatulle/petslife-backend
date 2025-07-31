import { Request } from 'express';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { CreatePetService } from '../services/create-pet.service';
import { CreatePetDto } from '../dto/create-pet.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('pets')
export class PetsController {
  constructor(private readonly createPetService: CreatePetService) {}

  @Post()
  async createPet(@Req() req: Request, @Body() body: CreatePetDto) {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.createPetService.createPet(userId, body);
  }
}
