import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignmentGroupService } from './assignment-group.service';
import { CreateAssignmentGroupDto } from './dto/create-assignment-group.dto';
import { UpdateAssignmentGroupDto } from './dto/update-assignment-group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('assignment-group')
@Controller('assignment-group')
export class AssignmentGroupController {
  constructor(private readonly assignmentGroupService: AssignmentGroupService) {}

  @Post()
  create(@Body() createAssignmentGroupDto: CreateAssignmentGroupDto) {
    return this.assignmentGroupService.create(createAssignmentGroupDto);
  }

  @Get()
  findAll() {
    return this.assignmentGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignmentGroupDto: UpdateAssignmentGroupDto) {
    return this.assignmentGroupService.update(+id, updateAssignmentGroupDto);
  }


  
}
