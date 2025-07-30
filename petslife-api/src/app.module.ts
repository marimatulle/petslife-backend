import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ProfileModule } from './profile/profile.module';
@Module({
  imports: [AuthModule, ProfileModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
