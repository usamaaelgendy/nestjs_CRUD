import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20, { message: 'incorrect length from 3 to 20' })
  readonly username: string;
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;
  @IsString()
  readonly country: string;
}
