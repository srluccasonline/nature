import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv'
import { green, red, yellow } from 'chalk'

async function bootstrap() {
  const envConfig = dotenv.config()

  if (envConfig.error) {
    console.log(red("🛑 Error loading '.env' file!"))
    console.log(yellow("💛 Tip: Change the name from '.env.xxx' to '.env' in your directory"))
    throw envConfig.error
  }

  console.log(green("🔥 Project Started! \n"))

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Qoma')
    .setDescription('Api Docs')
    .setVersion('1.0')
    .addTag('qomaTag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT);
}
bootstrap();
