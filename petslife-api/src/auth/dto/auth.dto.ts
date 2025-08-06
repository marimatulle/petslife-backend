import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  ValidateIf,
} from 'class-validator';

export enum UserRole {
  USER = 'USER',
  VETERINARIAN = 'VETERINARIAN',
}

export class SignInDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNotEmpty()
  @IsOptional()
  username?: string;

  @IsNotEmpty()
  password: string;
}

export class SignUpDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  @ValidateIf((obj: SignUpDto) => obj.role === UserRole.VETERINARIAN)
  @IsNotEmpty()
  crmv?: string;
}
