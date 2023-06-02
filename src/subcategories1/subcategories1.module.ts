import { Module } from '@nestjs/common';
import { Subcategories1Service } from './subcategories1.service';
import { Subcategories1Controller } from './subcategories1.controller';

@Module({
  controllers: [Subcategories1Controller],
  providers: [Subcategories1Service]
})
export class Subcategories1Module {}
