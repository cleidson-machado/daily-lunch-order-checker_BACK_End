import { Controller } from '@nestjs/common';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { LunchMealMenuDto } from './dto/lunch-meal-menu.dto';
import { LunchMealMenuService } from './lunch-meal-menu.service';

@ApiTags('LunchMealMenu')
@Controller('lunch-meal-menu')
export class LunchMealMenuController {
  constructor(private readonly lunchMealMenuService: LunchMealMenuService) {}

  @Post('/add')
  create(@Body() data: LunchMealMenuDto) {
    return this.lunchMealMenuService.create(data);
  }

  @Get('/listAll')
  findAll() {
    return this.lunchMealMenuService.findAll();
  }

  //TEST 02/02/2023
  @Get('/listBy/weekDayAndType' + '/:txtWeekData' + '/:txtTypeData')
  findByWeekNameAndType(
    @Param('txtWeekData') txtWeekData: string,
    @Param('txtTypeData') txtTypeData: string,
  ) {
    return this.lunchMealMenuService.findOneByNameOfWeekAndByType(
      txtWeekData,
      txtTypeData,
    );
  }

  @Get('/listBy' + '/:nameDayWeekToday')
  findByWeekName(@Param('nameDayWeekToday') nameDayWeekToday: string) {
    return this.lunchMealMenuService.findOneByNameOfWeek(nameDayWeekToday);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lunchMealMenuService.findOne(id);
  }

  @Put(':id')
  updateAllAttributes(@Param('id') id: string, @Body() data: LunchMealMenuDto) {
    return this.lunchMealMenuService.update(id, data);
  }

  @Patch(':id')
  updatePartialAttributes(
    @Param('id') id: string,
    @Body() data: LunchMealMenuDto,
  ) {
    return this.lunchMealMenuService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lunchMealMenuService.remove(id);
  }
}
