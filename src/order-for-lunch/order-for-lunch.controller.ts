import { Controller } from '@nestjs/common';
import { Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { OrderForLunchDto } from './dto/order-for-lunch.dto';
import { OrderForLunchService } from './order-for-lunch.service';

@ApiTags('OrderForLunchDto')
@Controller('order-for-lunch')
export class OrderForLunchController {
  constructor(private readonly orderForLunchService: OrderForLunchService) {}

  @Post('/add')
  create(@Body() data: OrderForLunchDto) {
    return this.orderForLunchService.create(data);
  }

  @Get('/listAll')
  findAll() {
    return this.orderForLunchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderForLunchService.findOne(id);
  }
  
  @Put(':id')
  updateAllAttributes(@Param('id') id: string, @Body() data: OrderForLunchDto) {
    return this.orderForLunchService.update(id, data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: OrderForLunchDto) {
    return this.orderForLunchService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderForLunchService.remove(id);
  }
}
