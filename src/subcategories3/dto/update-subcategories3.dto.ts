import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategories3Dto } from './create-subcategories3.dto';

export class UpdateSubcategories3Dto extends PartialType(CreateSubcategories3Dto) {}
