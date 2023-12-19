import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()

  // if we want to apply this comment app.useGlobalPipes
  @Length(3, 20, {
    message: 'incorrect length from 3 to 20',
    groups: ['create'],
  })
  @Length(3, 5, {
    message: 'incorrect length from 3 to 5',
    groups: ['update'],
  })
  readonly username: string;
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;
  @IsString()
  readonly country: string;
}
