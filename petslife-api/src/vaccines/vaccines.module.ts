import { Module } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { VaccinesController } from './vaccines.controller';

@Module({
  controllers: [VaccinesController],
  providers: [VaccinesService],
})
export class VaccinesModule {}
