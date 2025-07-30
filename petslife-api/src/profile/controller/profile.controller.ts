import { Request } from 'express';
import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { GetProfileService } from '../services/get-profile.service';
import { UpdateProfileService } from '../services/update-profile.service';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { jwtPayload } from 'src/auth/auth.types';

@UseGuards(AuthGuard)
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly getProfileService: GetProfileService,
    private readonly updateProfileService: UpdateProfileService,
  ) {}

  @Get()
  getProfile(@Req() req: Request) {
    const user = req.user as jwtPayload;
    const isVet = !!user.crmv;
    return this.getProfileService.getProfile(user.id, isVet);
  }

  @Patch()
  updateProfile(@Req() req: Request, @Body() dto: UpdateProfileDto) {
    const user = req.user as jwtPayload;
    const isVet = !!user.crmv;
    return this.updateProfileService.updateProfile(user.id, isVet, dto);
  }
}
