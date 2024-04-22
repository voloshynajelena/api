import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  category: string;

  @Prop()
  owner: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
