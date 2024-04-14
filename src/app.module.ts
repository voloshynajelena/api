import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cat, CatSchema } from './cats/cat.schema';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot(process.env.MONGO_KEY),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
