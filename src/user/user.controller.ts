import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common/decorators';
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

  @Get('/listAll')
  async findAll(){
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put('edit/:id')
  async updateAllAttributes(@Param('id') id: string, @Body() data: UserDTO){
    return this.userService.update(id, data);
  }

  @Patch(':id')
  async updatePartialAttributes(@Param('id') id: string, @Body() data: UserDTO){
    return this.userService.update(id, data);
  }

  //TO REVIEW!!
  //NEW DTO JUST FOR TEST - Update the Full Name Only
  //I DON'T NEED TO THIS ACTION LOOKLIKE IS TI.. I MEEN.. USING A SPECIFIC DTO CLASS.
  //IF YOU WILL UPDATE SOME ATTRIBUTES JUST USE @Patch
  @Patch('/editFullNameOnly/:id')
  async editUserFullName(@Param('id') id: string, @Body() data: UserEditFullNameOnlyDTO){
    return this.userService.updateFullName(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
    return this.userService.remove(id);
  }

}