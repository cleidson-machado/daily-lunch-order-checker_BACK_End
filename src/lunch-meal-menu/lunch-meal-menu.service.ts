import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LunchMealMenuDto } from 'src/lunch-meal-menu/dto/lunch-meal-menu.dto';

@Injectable()
export class LunchMealMenuService {

  constructor(private prisma: PrismaService){}

  //CREATE ONE
  async create(data: LunchMealMenuDto) {
    const theMenu = await this.prisma.lunchMealMenu.create({
      data,
    });
    return theMenu;
  }

  //FIND ALL
  async findAll() {
    return await this.prisma.lunchMealMenu.findMany({
    select: {
        id: true,
        name: true,
        type: true,
        averageCalories: true,
        averageWeight: true,
        averagePrice: true,
        dessertName: true,
        nameDayWeek: true,
        description: true,
        rateQualityNumber: true,
        imageLinkPath: true,
        createdAt: true,
        updatedAt: true,
      lunchBox: {
          select: {
              name: true,
              description: true,
              createdAt: true,
              updatedAt: true
          }
      } // Return all fields
    }
    });
  }

  //FIND ONE
  async findOne(id: string) {
    return await this.prisma.lunchMealMenu.findUnique({
      where: {
        id,
      }
    })
  }

  //EDIT ONE
  async update(id: string, data: LunchMealMenuDto) {
    return await this.prisma.lunchMealMenu.update({
      data,
      where: {
        id,
      }
    })
  }

  //DELETE ONE
  async remove(id: string) {
    return await this.prisma.lunchMealMenu.delete({
      where: {
        id,
      }
    })
  }
}
