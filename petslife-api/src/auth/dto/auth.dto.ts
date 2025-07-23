import { IsEmail, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

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

  @ValidateIf((obj: SignUpDto) => obj.crmv !== undefined)
  @IsOptional()
  crmv?: string;
}
