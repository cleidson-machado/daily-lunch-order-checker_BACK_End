import { Controller } from '@nestjs/common';
import { Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { LunchMealMenuDto } from './dto/lunch-meal-menu.dto';
import { LunchMealMenuService } from './lunch-meal-menu.service';

@ApiTags('LunchMealMenu')
@Controller('lunch-meal-menu')
export class LunchMealMenuController {
  constructor(private readonly lunchMealMenuService: LunchMealMenuService) {}

  @Post('/add')
  async create(@Body() data: LunchMealMenuDto) {
    return this.lunchMealMenuService.create(data);
  }

  @Get('/listAll')
  async findAll() {
    return this.lunchMealMenuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.lunchMealMenuService.findOne(id);
  }

  @Put(':id')
  async updateAllAttributes(@Param('id') id: string, @Body() data: LunchMealMenuDto) {
    return this.lunchMealMenuService.update(id, data);
  }

  @Patch(':id')
  async updatePartialAttributes(@Param('id') id: string, @Body() data: LunchMealMenuDto) {
    return this.lunchMealMenuService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.lunchMealMenuService.remove(id);
  }
}
