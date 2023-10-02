import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNotEmpty()
  username: string;
}
