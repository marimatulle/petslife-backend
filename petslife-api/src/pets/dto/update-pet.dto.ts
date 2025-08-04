import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdatePetDto {
  @IsOptional()
  @IsString()
  animalName?: string;

  @IsOptional()
  @IsDate()
  animalBirthDate?: Date;

  @IsOptional()
  @IsNumber()
  animalAge?: number;

  @IsOptional()
  @IsString()
  animalSpecies?: string;

  @IsOptional()
  @IsString()
  animalColor?: string;

  @IsOptional()
  @IsString()
  animalBreed?: string;

  @IsOptional()
  @IsString()
  animalSex?: string;

  @IsOptional()
  @Transform(({ value }) => {
    const parsed = parseFloat(String(value));
    return isNaN(parsed) ? undefined : parsed;
  })
  @IsNumber()
  animalWeight?: number;

  @IsOptional()
  @IsBoolean()
  isNeutered?: boolean;

  @IsOptional()
  @IsString()
  preExistingConditions?: string;

  @IsOptional()
  photo?: string;
}
