import { Controller, Get, Post, Delete, Param, Body, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.model';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger(CatsController.name);
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  @Get()
  async getAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  @Get(':id')
  async getCatById(@Param('id') id: string): Promise<Cat> {
    try {
      this.logger.log(`Fetching cat with ID: ${id}`);
      const cat = await this.catModel.findById(id).exec();
      this.logger.log(`Retrieved cat: ${cat}`);

      if (!cat) {
        throw new NotFoundException(`Cat with id ${id} not found`);
      }

      return cat;
    } catch (error) {
      this.logger.error(`Error fetching cat with ID ${id}: ${error.message}`);
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
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
