import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Subcategories1Service } from './subcategories1.service';
import { CreateSubcategories1Dto } from './dto/create-subcategories1.dto';
import { UpdateSubcategories1Dto } from './dto/update-subcategories1.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subcategories1')
@Controller('subcategories1')
export class Subcategories1Controller {
  constructor(private readonly subcategories1Service: Subcategories1Service) {}

  @Post()
  create(@Body() createSubcategories1Dto: CreateSubcategories1Dto) {
    return this.subcategories1Service.create(createSubcategories1Dto);
  }

  @Get()
  findAll() {
    return this.subcategories1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategories1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategories1Dto: UpdateSubcategories1Dto) {
    return this.subcategories1Service.update(+id, updateSubcategories1Dto);
  }

}
