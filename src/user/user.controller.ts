import { Controller, NotFoundException } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  addUser(@Body() data: UserDTO) {
    return this.userService.create(data);
  }

  @Get('/listAll')
  findAll() {
    return this.userService.findAll();
  }

  //FIND ALL by NAME OR EMAIL... USING A PERSONAL EXCEPTION WHEN THE USER IS NOT FOUND YET
  @Get('/listBy/lastNameOrEmail' + '/:txtData')
  async findAllByNameOrEmail(@Param('txtData') txtData: string) {
    return await this.userService.findAllNameOrEmail(txtData);
  }

  //TESTE.. USING A PERSONAL EXCEPTION WHEN THE USER IS NOT FOUND YET.. BETTER USE THIS ON THE SERVICE CLASS??
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`A User with ID:  ${id}  does not exist.`);
    }
    return user;
  }

  @Put(':id')
  updateAllAttributes(@Param('id') id: string, @Body() data: UserDTO) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  updatePartialAttributes(@Param('id') id: string, @Body() data: UserDTO) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
