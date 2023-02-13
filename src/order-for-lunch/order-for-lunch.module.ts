import { Module } from '@nestjs/common';
import { OrderForLunchService } from './order-for-lunch.service';
import { OrderForLunchController } from './order-for-lunch.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [OrderForLunchController],
  providers: [OrderForLunchService, PrismaService]
})
export class OrderForLunchModule {}
