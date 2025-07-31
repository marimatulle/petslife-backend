import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  animalName: string;

  @IsNotEmpty()
  @IsDate()
  animalBirthDate: Date;

  @IsNotEmpty()
  @IsNumber()
  animalAge: number;

  @IsNotEmpty()
  animalSpecies: string;

  @IsNotEmpty()
  animalColor: string;

  @IsNotEmpty()
  animalBreed: string;

  @IsNotEmpty()
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
  preExistingConditions?: string;

  @IsOptional()
  photo?: string;
}
