import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategories1Dto } from './create-subcategories1.dto';

export class UpdateSubcategories1Dto extends PartialType(CreateSubcategories1Dto) {}
