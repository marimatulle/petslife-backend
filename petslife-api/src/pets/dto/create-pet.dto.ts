import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  animalName: string;

  @IsNotEmpty()
  @IsDate()
  animalBirthDate: Date;

  @IsNotEmpty()
  @IsNumber()
  animalAge: number;

  @IsNotEmpty()
  @IsString()
  animalSpecies: string;

  @IsNotEmpty()
  @IsString()
  animalColor: string;

  @IsNotEmpty()
  @IsString()
  animalBreed: string;

  @IsNotEmpty()
  @IsString()
  animalSex: string;

  @IsOptional()
  @Transform(({ value }) => {
    const parsed = parseFloat(String(value));
    return isNaN(parsed) ? undefined : parsed;
  })
  @IsNumber()
  animalWeight?: number;

  @IsNotEmpty()
  @IsBoolean()
  isNeutered: boolean;

  @IsOptional()
  @IsString()
  preExistingConditions?: string;

  @IsOptional()
  photo?: string;
}
