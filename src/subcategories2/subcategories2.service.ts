import { HttpException, HttpStatus,Injectable } from '@nestjs/common';
import { CreateSubcategories2Dto } from './dto/create-subcategories2.dto';
import { UpdateSubcategories2Dto } from './dto/update-subcategories2.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategories2 } from './entities/subcategories2.entity';
import { Repository } from 'typeorm';
@Injectable()
export class Subcategories2Service {
  
  constructor(
    @InjectRepository(Subcategories2) private subcategory2Repository: Repository<Subcategories2>,
  ) { }

  async create(createCategoryDto: CreateSubcategories2Dto) {
    const categoryFound = await this.subcategory2Repository.findOne({
      where: {
        name: createCategoryDto.name,
      }
    })

    if (categoryFound) {
      return new HttpException('Categoria existente', HttpStatus.CONFLICT)
    }

    const newCategory = this.subcategory2Repository.create(createCategoryDto)
    return this.subcategory2Repository.save(newCategory);
  }

  findAll() {
    return this.subcategory2Repository.find({});
  }

  async findOne(id: number) {
    const updateSubcategories2Found = await this.subcategory2Repository.findOne({
      where: {
        id,
      },
      relations:['categories']
    })

    if (!updateSubcategories2Found) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    return updateSubcategories2Found;
  }

  async update(id: number, updateSubcategories2Dto: UpdateSubcategories2Dto) {
    const categoryFound = await this.subcategory2Repository.findOne({
      where: {
        id,
      },
      relations:['categories']
    })

    if (!categoryFound) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    const updateCategory = Object.assign(categoryFound, updateSubcategories2Dto)
    return 
  }
  // create(createSubcategories2Dto: CreateSubcategories2Dto) {
  //   return 'This action adds a new subcategories2';
  // }
  
  // findAll() {
  //   return `This action returns all subcategories2`;
  // }
  
  // findOne(id: number) {
  //   return `This action returns a #${id} subcategories2`;
  // }
  
  // update(id: number, updateSubcategories2Dto: UpdateSubcategories2Dto) {
  //   return `This action updates a #${id} subcategories2`;
  // }
  
  // remove(id: number) {
  //   return `This action removes a #${id} subcategories2`;
  // }
}
