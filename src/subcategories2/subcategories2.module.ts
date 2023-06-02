import { Module } from '@nestjs/common';
import { Subcategories2Service } from './subcategories2.service';
import { Subcategories2Controller } from './subcategories2.controller';

@Module({
  controllers: [Subcategories2Controller],
  providers: [Subcategories2Service]
})
export class Subcategories2Module {}
