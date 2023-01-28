import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  async addUser(@Body() data: UserDTO){
    return this.userService.create(data);
  }

  @Get('/list')
  async listuser(){
    return this.userService.findAll();
  }

  @Put('/edit/:id')
  async editUser(@Param('id') id: string, @Body() data: UserDTO){
    return this.userService.update(id, data);
  }

  @Delete('/del/:id')
  async deleteUser(@Param('id') id: string){
    return this.userService.delete(id);
  }

}