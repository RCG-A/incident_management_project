import { Injectable } from '@nestjs/common';
import { CreateSubcategories3Dto } from './dto/create-subcategories3.dto';
import { UpdateSubcategories3Dto } from './dto/update-subcategories3.dto';

@Injectable()
export class Subcategories3Service {
  create(createSubcategories3Dto: CreateSubcategories3Dto) {
    return 'This action adds a new subcategories3';
  }

  findAll() {
    return `This action returns all subcategories3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategories3`;
  }

  update(id: number, updateSubcategories3Dto: UpdateSubcategories3Dto) {
    return `This action updates a #${id} subcategories3`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategories3`;
  }
}
