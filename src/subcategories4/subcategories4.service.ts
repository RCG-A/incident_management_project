import { Injectable } from '@nestjs/common';
import { CreateSubcategories4Dto } from './dto/create-subcategories4.dto';
import { UpdateSubcategories4Dto } from './dto/update-subcategories4.dto';

@Injectable()
export class Subcategories4Service {
  create(createSubcategories4Dto: CreateSubcategories4Dto) {
    return 'This action adds a new subcategories4';
  }

  findAll() {
    return `This action returns all subcategories4`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategories4`;
  }

  update(id: number, updateSubcategories4Dto: UpdateSubcategories4Dto) {
    return `This action updates a #${id} subcategories4`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategories4`;
  }
}
