import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Daily Lunch Order Checker Nestjs / API - Doc. Swagger - V1')
    .setDescription ('Criação de Documentação Inicial da API que gerencia pedido de refeições...')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('LunchBoxType')
    .addTag('LunchMealMenu')
    .addTag('OrderForLunchDto')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
