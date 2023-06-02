import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Subcategories3Service } from './subcategories3.service';
import { CreateSubcategories3Dto } from './dto/create-subcategories3.dto';
import { UpdateSubcategories3Dto } from './dto/update-subcategories3.dto';

@Controller('subcategories3')
export class Subcategories3Controller {
  constructor(private readonly subcategories3Service: Subcategories3Service) {}

  @Post()
  create(@Body() createSubcategories3Dto: CreateSubcategories3Dto) {
    return this.subcategories3Service.create(createSubcategories3Dto);
  }

  @Get()
  findAll() {
    return this.subcategories3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategories3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategories3Dto: UpdateSubcategories3Dto) {
    return this.subcategories3Service.update(+id, updateSubcategories3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategories3Service.remove(+id);
  }
}
