import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('incident_management_project')
    .setDescription('incident_management_project')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Users')
    .addTag('assignment-group')
    .addTag('categories')
    .addTag('incidents')
    .addTag('rol')
    .addTag('subcategories1')
    .addTag('subcategories2')
    .addTag('subcategories3')
    .addTag('subcategories4')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(4000);
}
bootstrap();
