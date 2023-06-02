import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignmentGroupDto } from './create-assignment-group.dto';

export class UpdateAssignmentGroupDto extends PartialType(CreateAssignmentGroupDto) {}
