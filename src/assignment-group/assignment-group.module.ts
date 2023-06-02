import { Module } from '@nestjs/common';
import { AssignmentGroupService } from './assignment-group.service';
import { AssignmentGroupController } from './assignment-group.controller';

@Module({
  controllers: [AssignmentGroupController],
  providers: [AssignmentGroupService]
})
export class AssignmentGroupModule {}
