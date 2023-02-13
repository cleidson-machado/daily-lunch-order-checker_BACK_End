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

//FIND ALL
async findAll(){
    return await this.prisma.user.findMany();
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
async update(id: string, data: UserDTO){
    return await this.prisma.user.update({
        data,
        where: {
            id,
        },
    });
}

//DELETE ONE
async remove(id: string){
    return await this.prisma.user.delete({
        where: {
            id,
        },
    });
}

}