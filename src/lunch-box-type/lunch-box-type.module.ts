import { Module } from '@nestjs/common';
import { LunchBoxTypeService } from './lunch-box-type.service';
import { LunchBoxTypeController } from './lunch-box-type.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [LunchBoxTypeController],
  providers: [LunchBoxTypeService, PrismaService]
})
export class LunchBoxTypeModule {}
