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

  //FIND ALL
  async findAll() {
    return await this.prisma.orderForLunch.findMany();
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
