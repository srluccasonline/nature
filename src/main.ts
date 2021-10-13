import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
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
  await app.listen(3000);
}
bootstrap();
