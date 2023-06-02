import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategories2Dto } from './create-subcategories2.dto';

export class UpdateSubcategories2Dto extends PartialType(CreateSubcategories2Dto) {}
