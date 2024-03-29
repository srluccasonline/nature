import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'
import { TypeOrmModule } from '@nestjs/typeorm';
dotenv.config()

@Module({
  imports: [AuthModule,
    MongooseModule.forRoot(process.env.MONGO),
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
