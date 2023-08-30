import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { PrismaClient } from '@prisma/client';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const prisma = new PrismaClient();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Voetbalkoning API')
    .setDescription('API for the Voetbalkoning app')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
