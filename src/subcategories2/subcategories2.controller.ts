import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Subcategories2Service } from './subcategories2.service';
import { CreateSubcategories2Dto } from './dto/create-subcategories2.dto';
import { UpdateSubcategories2Dto } from './dto/update-subcategories2.dto';

@Controller('subcategories2')
export class Subcategories2Controller {
  constructor(private readonly subcategories2Service: Subcategories2Service) {}

  @Post()
  create(@Body() createSubcategories2Dto: CreateSubcategories2Dto) {
    return this.subcategories2Service.create(createSubcategories2Dto);
  }

  @Get()
  findAll() {
    return this.subcategories2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategories2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategories2Dto: UpdateSubcategories2Dto) {
    return this.subcategories2Service.update(+id, updateSubcategories2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategories2Service.remove(+id);
  }
}
