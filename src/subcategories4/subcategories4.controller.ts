import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Subcategories4Service } from './subcategories4.service';
import { CreateSubcategories4Dto } from './dto/create-subcategories4.dto';
import { UpdateSubcategories4Dto } from './dto/update-subcategories4.dto';

@Controller('subcategories4')
export class Subcategories4Controller {
  constructor(private readonly subcategories4Service: Subcategories4Service) {}

  @Post()
  create(@Body() createSubcategories4Dto: CreateSubcategories4Dto) {
    return this.subcategories4Service.create(createSubcategories4Dto);
  }

  @Get()
  findAll() {
    return this.subcategories4Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategories4Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategories4Dto: UpdateSubcategories4Dto) {
    return this.subcategories4Service.update(+id, updateSubcategories4Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategories4Service.remove(+id);
  }
}
