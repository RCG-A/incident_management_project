import { Module } from '@nestjs/common';
import { Subcategories3Service } from './subcategories3.service';
import { Subcategories3Controller } from './subcategories3.controller';

@Module({
  controllers: [Subcategories3Controller],
  providers: [Subcategories3Service]
})
export class Subcategories3Module {}
