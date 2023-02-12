import { Module } from '@nestjs/common';
import { LunchMealMenuService } from './lunch-meal-menu.service';
import { LunchMealMenuController } from './lunch-meal-menu.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [LunchMealMenuController],
  providers: [LunchMealMenuService, PrismaService]
})
export class LunchMealMenuModule {}
