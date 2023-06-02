import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategories4Dto } from './create-subcategories4.dto';

export class UpdateSubcategories4Dto extends PartialType(CreateSubcategories4Dto) {}
