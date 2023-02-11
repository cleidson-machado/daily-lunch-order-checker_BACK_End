import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { UserDTO } from './dto/user.dto';
import { UserEditFullNameOnlyDTO } from './dto/user-edit-fullNameOnly.dto'; 
import { UserService } from './user.service';

@ApiTags('Users')
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

  //NEW DTO JUST FOR TEST - Update the Full Name Only
  @Put('/editfullname/:id')
  async editUserFullName(@Param('id') id: string, @Body() data: UserEditFullNameOnlyDTO){
    return this.userService.updateFullName(id, data);
  }

}