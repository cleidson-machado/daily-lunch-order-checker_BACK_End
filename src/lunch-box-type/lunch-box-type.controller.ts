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
  async create(@Body() data: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.create(data);
  }

  @Get('/listAll')
  async findAll() {
    return this.lunchBoxTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.lunchBoxTypeService.findOne(id);
  }

  @Put(':id')
  async updateAllAttributes(@Param('id') id: string, @Body() lunchBoxTypeDto: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.update(id, lunchBoxTypeDto);
  }

  @Patch(':id')
  async updatePartialAttributes(@Param('id') id: string, @Body() lunchBoxTypeDto: LunchBoxTypeDto) {
    return this.lunchBoxTypeService.update(id, lunchBoxTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.lunchBoxTypeService.remove(id);
  }
}
