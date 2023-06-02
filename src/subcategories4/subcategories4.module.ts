import { Module } from '@nestjs/common';
import { Subcategories4Service } from './subcategories4.service';
import { Subcategories4Controller } from './subcategories4.controller';

@Module({
  controllers: [Subcategories4Controller],
  providers: [Subcategories4Service]
})
export class Subcategories4Module {}
