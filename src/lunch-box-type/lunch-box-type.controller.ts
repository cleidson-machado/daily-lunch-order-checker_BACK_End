import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { LunchBoxTypeDto } from './dto/lunch-box-type.dto';
import { LunchBoxTypeService } from './lunch-box-type.service';

@ApiTags('LunchBoxType')
@Controller('lunch-box-type')
export class LunchBoxTypeController {
  constructor(private readonly lunchBoxTypeService: LunchBoxTypeService) {}

  @Post('/add')
  create(@Body() data: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.create(data);
  }

  @Get('/listAll')
  findAll() {
    return this.lunchBoxTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lunchBoxTypeService.findOne(id);
  }

  @Put(':id')
  updateAllAttributes(@Param('id') id: string, @Body() data: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.update(id, data);
  }

  @Patch(':id')
  updatePartialAttributes(@Param('id') id: string, @Body() data: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.update(id, data);
  }

  @Delete(':id')
   remove(@Param('id') id: string) {
    return this.lunchBoxTypeService.remove(id);
  }
}
