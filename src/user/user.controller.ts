import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  addUser(@Body() data: UserDTO){
    return this.userService.create(data);
  }

  @Get('/listAll')
  findAll(){
    return this.userService.findAll();
  }

  //FIND ALL by NAME OR EMAIL... FOR TEST ON A MODAL ORDER LUNCH...
  @Get('/listBy/lastNameOrEmail'+'/:txtData')
  findAllByNameOrEmail(@Param('txtData') txtData: string) {
    return this.userService.findAllNameOrEmail(txtData);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  updateAllAttributes(@Param('id') id: string, @Body() data: UserDTO){
    return this.userService.update(id, data);
  }

  @Patch(':id')
  updatePartialAttributes(@Param('id') id: string, @Body() data: UserDTO){
    return this.userService.update(id, data);
  }

  @Delete(':id')
   remove(@Param('id') id: string){
    return this.userService.remove(id);
  }

}