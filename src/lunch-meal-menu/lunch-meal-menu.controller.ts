import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { LunchMealMenuDto } from './dto/lunch-meal-menu.dto';
import { LunchMealMenuService } from './lunch-meal-menu.service';

@ApiTags('LunchMealMenu')
@Controller('lunch-meal-menu')
export class LunchMealMenuController {
  constructor(private readonly lunchMealMenuService: LunchMealMenuService) {}

  //TEST 28/05/2023... To Handle Error When Nothing is Send on this Route Controller!
  @Get()
  handleNoParam() {
    throw new HttpException(
      'This Route on the Controller Class not Exist!',
      HttpStatus.NOT_ACCEPTABLE, //ERROR STATUS: 406
    );
  }

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

  //TEST 28/05/2023... To Handle Error When Try Find a Lunch on Database!
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const lunchMealMenuId = await this.lunchMealMenuService.findOne(id);
    if (id.length < 36 || id.length > 36) {
      throw new HttpException(
        'The ID Length or Format is out of expected!',
        HttpStatus.BAD_REQUEST, //ERROR STATUS: 400
      );
    } else if (!lunchMealMenuId) {
      throw new HttpException(
        'THE MENU Was NOT FOUND in the Database. Verify again because the ID is a Case sensitive UUID string!',
        HttpStatus.NOT_FOUND, //ERROR STATUS: 404
      );
    } else {
      return lunchMealMenuId;
    }
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
