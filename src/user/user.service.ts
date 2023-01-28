import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from 'src/user/dto/user.dto'

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}
    
    //CREATE ONE
    async create(data: UserDTO){
        const theUser = await this.prisma.user.create({
            data,
        });
        return theUser
    }

    //LIST ALL
    async findAll(){
        return this.prisma.user.findMany();
    }

    //EDIT ONE
    async update(id: string, data: UserDTO){
        return await this.prisma.user.update({
            data,
            where: {
                id,
            },
        });
    }

    //EXCLUDE ONE
    async delete(id: string){
        return await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }

}