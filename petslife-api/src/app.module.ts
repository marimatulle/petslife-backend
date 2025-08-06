import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ProfileModule } from './profile/profile.module';
import { PetsModule } from './pets/pets.module';
import { FriendRequestsModule } from './friend-requests/friend-requests.module';
import { VaccinesModule } from './vaccines/vaccines.module';
@Module({
  imports: [
    AuthModule,
    ProfileModule,
    PetsModule,
    FriendRequestsModule,
    VaccinesModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
