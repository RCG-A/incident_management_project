import { Injectable } from '@nestjs/common';
import { CreateAssignmentGroupDto } from './dto/create-assignment-group.dto';
import { UpdateAssignmentGroupDto } from './dto/update-assignment-group.dto';

@Injectable()
export class AssignmentGroupService {
  create(createAssignmentGroupDto: CreateAssignmentGroupDto) {
    return 'This action adds a new assignmentGroup';
  }

  findAll() {
    return `This action returns all assignmentGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignmentGroup`;
  }

  update(id: number, updateAssignmentGroupDto: UpdateAssignmentGroupDto) {
    return `This action updates a #${id} assignmentGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignmentGroup`;
  }
}
