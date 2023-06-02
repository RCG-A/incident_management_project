import { Injectable } from '@nestjs/common';
import { CreateSubcategories1Dto } from './dto/create-subcategories1.dto';
import { UpdateSubcategories1Dto } from './dto/update-subcategories1.dto';

@Injectable()
export class Subcategories1Service {
  create(createSubcategories1Dto: CreateSubcategories1Dto) {
    return 'This action adds a new subcategories1';
  }

  findAll() {
    return `This action returns all subcategories1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategories1`;
  }

  update(id: number, updateSubcategories1Dto: UpdateSubcategories1Dto) {
    return `This action updates a #${id} subcategories1`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategories1`;
  }
}
