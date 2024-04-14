import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from "@nestjs/common";
import { Cat } from './cat.model';

@Controller('cats')
export class CatsController {
  private cats: Cat[] = [
    { id: 1, name: 'Whiskers', age: 5 },
    { id: 2, name: 'Fluffy', age: 3 },
    { id: 3, name: 'Mittens', age: 2 },
    { id: 4, name: 'Snowball', age: 4 },
    { id: 5, name: 'Tiger', age: 7 },
    { id: 6, name: 'Shadow', age: 6 },
    { id: 7, name: 'Felix', age: 4 },
    { id: 8, name: 'Simba', age: 3 },
    { id: 9, name: 'Luna', age: 1 },
    { id: 10, name: 'Max', age: 8 },
  ];

  @Get()
  getAllCats(): Cat[] {
    return this.cats;
  }

  @Get(':id')
  getCatById(@Param('id') id: number): Cat {
    const cat = this.cats.find(cat => cat.id === Number(id));
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  @Post()
  createCat(@Body() cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }


  @Delete(':id')
  deleteCat(@Param('id') id: number): string {
    const catIndex = this.cats.findIndex(cat => cat.id === Number(id));
    if (catIndex !== -1) {
      this.cats.splice(catIndex, 1);
      return `Cat with id ${id} deleted`;
    }
    return `Cat with id ${id} not found`;
  }
}
