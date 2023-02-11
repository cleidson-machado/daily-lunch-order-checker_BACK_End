import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LunchBoxTypeDto } from 'src/lunch-box-type/dto/lunch-box-type.dto'

@Injectable()
export class LunchBoxTypeService {

  constructor(private prisma: PrismaService){}

  //CREATE ONE
  async create(data: LunchBoxTypeDto) {
    const theBox = await this.prisma.lunchBoxType.create({
      data,
    });
    return theBox
  }

  //FIND ALL
  async findAll() {
    return await this.prisma.lunchBoxType.findMany();
  }

  //FIND ONE
  async findOne(id: string) {
    return await this.prisma.lunchBoxType.findUnique({
          where: {
            id,
        },
    });
  }

  //EDIT ONE
  async update(id: string, data: LunchBoxTypeDto) {
    return await this.prisma.lunchBoxType.update({
      data,
      where: {
          id,
      },
    });
  }

  //DELETE ONE
  async remove(id: string) {
    return await this.prisma.lunchBoxType.delete({
          where: {
            id,
        },
    })
  }
}
