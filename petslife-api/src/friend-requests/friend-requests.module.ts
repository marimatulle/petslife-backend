import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendRequestsController } from './controller/friend-requests.controller';

@Module({
  controllers: [FriendRequestsController],
  providers: [FriendsService],
})
export class FriendRequestsModule {}
