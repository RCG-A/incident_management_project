import { Module } from '@nestjs/common';
import { Subcategories2Service } from './subcategories2.service';
import { Subcategories2Controller } from './subcategories2.controller';
import { Subcategories2 } from './entities/subcategories2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategories2])],
  controllers: [Subcategories2Controller],
  providers: [Subcategories2Service],
  exports: [Subcategories2Service]
})
export class Subcategories2Module {}
