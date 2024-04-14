import { Controller, Get, Post, Delete, Param, Body, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.model';

@Controller('cats')
export class CatsController {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
  // private cats: Cat[] = [
  //   { id: 1, name: 'Whiskers', age: 5 },
  //   { id: 2, name: 'Fluffy', age: 3 },
  //   { id: 3, name: 'Mittens', age: 2 },
  //   { id: 4, name: 'Snowball', age: 4 },
  //   { id: 5, name: 'Tiger', age: 7 },
  //   { id: 6, name: 'Shadow', age: 6 },
  //   { id: 7, name: 'Felix', age: 4 },
  //   { id: 8, name: 'Simba', age: 3 },
  //   { id: 9, name: 'Luna', age: 1 },
  //   { id: 10, name: 'Max', age: 8 },
  // ];

  @Get()
  async getAllCats(): Promise<Cat[]> {
    console.log('test', this.catModel.find().exec());
    return this.catModel.find().exec();
  }

  @Get(':id')
  async getCatById(@Param('id') id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  @Post()
  async createCat(@Body() cat: Cat): Promise<Cat> {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<string> {
    const result = await this.catModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return `Cat with id ${id} deleted`;
  }
}
