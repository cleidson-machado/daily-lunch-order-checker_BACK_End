import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LunchBoxTypeModule } from './lunch-box-type/lunch-box-type.module';
import { LunchMealMenuModule } from './lunch-meal-menu/lunch-meal-menu.module';


@Module({
  imports: [UserModule, LunchBoxTypeModule, LunchMealMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
