import { Module } from '@nestjs/common';
import { Subcategories1Service } from './subcategories1.service';
import { Subcategories1Controller } from './subcategories1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategories1 } from './entities/subcategories1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategories1])],
  controllers: [Subcategories1Controller],
  providers: [Subcategories1Service],
  exports: [Subcategories1Service]
})
export class Subcategories1Module {}
