import { Injectable } from '@nestjs/common';
import { CreateSubcategories2Dto } from './dto/create-subcategories2.dto';
import { UpdateSubcategories2Dto } from './dto/update-subcategories2.dto';

@Injectable()
export class Subcategories2Service {
  create(createSubcategories2Dto: CreateSubcategories2Dto) {
    return 'This action adds a new subcategories2';
  }

  findAll() {
    return `This action returns all subcategories2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategories2`;
  }

  update(id: number, updateSubcategories2Dto: UpdateSubcategories2Dto) {
    return `This action updates a #${id} subcategories2`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategories2`;
  }
}
