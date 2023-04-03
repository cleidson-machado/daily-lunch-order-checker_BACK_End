import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { OrderForLunchDto } from './dto/order-for-lunch.dto';

@Injectable()
export class OrderForLunchService {

  constructor(private prisma: PrismaService){}

  //CREATE ONE
  async create(data: OrderForLunchDto) {
    const theOrder = await this.prisma.orderForLunch.create({
      data,
    });
    return theOrder;
  }

  //FIND ALL Return The Related Object.. and just specific Fields
  async findAll() {
    return await this.prisma.orderForLunch.findMany({
      select: { // AQUI É O PEDIDO
            id: true,
            orderValue: true,
            amount:true,
            createdAt: true,
            updatedAt: true,
        lunchMeal: { // QUE CONTEM O MENU DA REFEIÇÃO...
              select: {
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
                  lunchBox: { // QUE CONTEM A MARMITA UTILIZADA...
                      select: {
                        name: true,
                        description: true,
                        imageLinkPath: true,
                        createdAt: true,
                        updatedAt: true
                      }
                  }
              },
        },
        userOrder: {// QUE CONTEM O USUÁRIO SOLICITANTE...
            select: {
              firstName: true,
              lastName: true,
              email: true,
              isActive: true,
              createdAt: true,
              updatedAt: true
            },
        }
      },
    });
  }

  //FIND ONE
  async findOne(id: string) {
    return await this.prisma.orderForLunch.findUnique({
      where: {
        id,
      }
    })
  }

  //EDIT ONE
  async update(id: string, data: OrderForLunchDto) {
    return await this.prisma.orderForLunch.update({
      data,
      where: {
        id,
      }
    })
  }

  //DELETE ONE
  async remove(id: string) {
    return await this.prisma.orderForLunch.delete({
      where: {
        id,
      }
    })
  }
}
