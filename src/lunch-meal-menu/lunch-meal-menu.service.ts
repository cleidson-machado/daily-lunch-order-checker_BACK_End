import { Injectable, Req, Res } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LunchMealMenuDto } from 'src/lunch-meal-menu/dto/lunch-meal-menu.dto';

@Injectable()
export class LunchMealMenuService {
  constructor(private prisma: PrismaService) {}

  //CREATE ONE
  create(data: LunchMealMenuDto) {
    const theMenu = this.prisma.lunchMealMenu.create({
      data,
    });
    return theMenu;
  }

  //FIND ALL
  findAll() {
    return this.prisma.lunchMealMenu.findMany({
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
            imageLinkPath: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  //TEST_1
  findOneByNameOfWeekTest1(nameDayWeekToday: string) {
    try {
      const menuData = this.prisma.lunchMealMenu.findMany({
        where: {
          nameDayWeek: {
            contains: nameDayWeekToday,
          },
        },
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
              imageLinkPath: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
      return menuData;
    } catch (error) {
      return error;
    }
  }

  //FIND ALL BY NAME OF WEEK TEST 2
  findOneByNameOfWeekAndByType(txtWeekData: string, txtTypeData: string) {
    return this.prisma.lunchMealMenu.findMany({
      where: {
        AND: [
          {
            nameDayWeek: {
              contains: txtWeekData,
            },
          },

          {
            type: {
              contains: txtTypeData,
            },
          },
        ],
      },
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
            imageLinkPath: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  //FIND ALL BY NAME OF WEEK OK DEFAULT
  findOneByNameOfWeek(nameDayWeekToday: string) {
    return this.prisma.lunchMealMenu.findMany({
      where: {
        nameDayWeek: {
          contains: nameDayWeekToday,
        },
      },
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
            imageLinkPath: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  //FIND ONE
  findOne(id: string) {
    return this.prisma.lunchMealMenu.findUnique({
      where: {
        id,
      },
    });
  }

  //EDIT ONE
  update(id: string, data: LunchMealMenuDto) {
    return this.prisma.lunchMealMenu.update({
      data,
      where: {
        id,
      },
    });
  }

  //DELETE ONE
  remove(id: string) {
    return this.prisma.lunchMealMenu.delete({
      where: {
        id,
      },
    });
  }
}
