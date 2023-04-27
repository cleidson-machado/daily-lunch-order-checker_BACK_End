import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //CREATE ONE
  async create(data: UserDTO) {
    const theUser = await this.prisma.user.create({
      data,
    });
    return theUser;
  }

  //FIND ALL
  async findAll() {
    return await this.prisma.user.findMany();
  }

  //FIND ALL by NAME OR EMAIL
  async findAllNameOrEmail(txtData: string) {
    const searchUser = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            lastName: {
              contains: txtData,
            },
          },

          {
            email: {
              contains: txtData,
            },
          },
        ],
      },
      select: {
        id: true,
        idCompanyEmployee: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        firstName: 'desc',
      },
    });

    if (searchUser.length === 0) {
      throw new BadRequestException(
        `The User with Last Name or Email: ${txtData} not found in the database!`,
      );
    } else {
      return searchUser;
    }
  }

  //FIND ONE
  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  //EDIT ONE
  async update(id: string, data: UserDTO) {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  //DELETE ONE
  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
