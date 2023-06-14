import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAssignmentGroupDto } from './dto/create-assignment-group.dto';
import { UpdateAssignmentGroupDto } from './dto/update-assignment-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentGroup } from './entities/assignment-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentGroupService {

  constructor(
    @InjectRepository(AssignmentGroup) private AssignmentGroupRepository: Repository<AssignmentGroup>,
  ) { }



  async create(createAssignmentGroupDto: CreateAssignmentGroupDto) {

    const AssignmentGroupFound = await this.AssignmentGroupRepository.findOne({
      where: {
        name: createAssignmentGroupDto.name
      }
    })

    if (AssignmentGroupFound) {
      return new HttpException('El rol ya  existe', HttpStatus.CONFLICT)
    }

    const newAssignmentGroup = this.AssignmentGroupRepository.create(createAssignmentGroupDto)
    return this.AssignmentGroupRepository.save(newAssignmentGroup)

  }


  findAll() {
    return this.AssignmentGroupRepository.find();
  }

  async findOne(id: number) {
    const AssignmentGroupFound = await this.AssignmentGroupRepository.findOne({
      where: {
        id
      },
    })
  
    if (!AssignmentGroup) {
      return new HttpException('Creacion de rol erronea', HttpStatus.NOT_FOUND)
    }
  
    return AssignmentGroup
  }
  

  

  async update(id: number, updateAssignmentGroupDto: UpdateAssignmentGroupDto) {
    const AssignmentGroupFound = await this.AssignmentGroupRepository.findOne({
      where: {
        id
      }
    })
  
    if (!AssignmentGroupFound) {
      return new HttpException('area no encontrada', HttpStatus.NOT_FOUND)
    }
  
    const updateAssignmentGroup = Object.assign(AssignmentGroupFound, updateAssignmentGroupDto)
    return this.AssignmentGroupRepository.save(updateAssignmentGroup)
  
  }
  

  
}
