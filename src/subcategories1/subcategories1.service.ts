import { HttpException, HttpStatus,Injectable } from '@nestjs/common';
import { CreateSubcategories1Dto } from './dto/create-subcategories1.dto';
import { UpdateSubcategories1Dto } from './dto/update-subcategories1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategories1 } from './entities/subcategories1.entity';
import { Repository } from 'typeorm';
@Injectable()
export class Subcategories1Service {
  
  constructor(
    @InjectRepository(Subcategories1) private subcategory1Repository: Repository<Subcategories1>,
  ) { }

  async create(createCategoryDto: CreateSubcategories1Dto) {
    const categoryFound = await this.subcategory1Repository.findOne({
      where: {
        name: createCategoryDto.name,
      }
    })

    if (categoryFound) {
      return new HttpException('Categoria existente', HttpStatus.CONFLICT)
    }

    const newCategory = this.subcategory1Repository.create(createCategoryDto)
    return this.subcategory1Repository.save(newCategory);
  }

  findAll() {
    return this.subcategory1Repository.find({});
  }

  async findOne(id: number) {
    const updateSubcategories1Found = await this.subcategory1Repository.findOne({
      where: {
        id,
      }
    })

    if (!updateSubcategories1Found) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    return updateSubcategories1Found;
  }

  async update(id: number, updateSubcategories1Dto: UpdateSubcategories1Dto) {
    const categoryFound = await this.subcategory1Repository.findOne({
      where: {
        id,
      },
    })

    if (!categoryFound) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    const updateCategory = Object.assign(categoryFound, updateSubcategories1Dto)
    return 
  }
  // create(createSubcategories1Dto: CreateSubcategories1Dto) {
  //   return 'This action adds a new subcategories1';
  // }
  
  // findAll() {
  //   return `This action returns all subcategories1`;
  // }
  
  // findOne(id: number) {
  //   return `This action returns a #${id} subcategories1`;
  // }
  
  // update(id: number, updateSubcategories1Dto: UpdateSubcategories1Dto) {
  //   return `This action updates a #${id} subcategories1`;
  // }
  
  // remove(id: number) {
  //   return `This action removes a #${id} subcategories1`;
  // }
}
