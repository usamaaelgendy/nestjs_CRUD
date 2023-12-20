import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

// if we want to apply this comment app.useGlobalPipes
export class CreateUserDto {
  @IsString()
  @Length(3, 20, { message: 'incorrect length from 3 to 20' })
  @IsNotEmpty()
  readonly username: string;
  @IsEmail({}, { message: 'incorrect email' })
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsOptional()
  readonly country?: string;
  @IsInt()
  @IsOptional()
  readonly age?: number;
}
