import { HttpException, HttpStatus,Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CategoriesService {
  
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryFound = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name,
      }
    })

    if (categoryFound) {
      return new HttpException('Categoria existente', HttpStatus.CONFLICT)
    }

    const newCategory = this.categoryRepository.create(createCategoryDto)
    return this.categoryRepository.save(newCategory);
  }

  findAll() {
    return this.categoryRepository.find({});
  }

  async findOne(id: number) {
    const categoryFound = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: ['product']
    })

    if (!categoryFound) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    return categoryFound;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const categoryFound = await this.categoryRepository.findOne({
      where: {
        id,
      },
    })

    if (!categoryFound) {
      return new HttpException('Categoria inexistente', HttpStatus.NOT_FOUND)
    }

    const updateCategory = Object.assign(categoryFound, updateCategoryDto)
    return 
  }
}
