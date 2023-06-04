import { Module } from '@nestjs/common';
import { AssignmentGroupService } from './assignment-group.service';
import { AssignmentGroupController } from './assignment-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentGroup } from './entities/assignment-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssignmentGroup])],
  controllers: [AssignmentGroupController],
  providers: [AssignmentGroupService],
  exports: [AssignmentGroupService]
})
export class AssignmentGroupModule {}
