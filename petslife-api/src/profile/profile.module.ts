import { Module } from '@nestjs/common';
import { GetProfileService } from './services/get-profile.service';
import { UpdateProfileService } from './services/update-profile.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileController } from './controller/profile.controller';

@Module({
  controllers: [ProfileController],
  providers: [GetProfileService, UpdateProfileService, PrismaService],
})
export class ProfileModule {}
