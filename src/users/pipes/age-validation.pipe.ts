import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AgeValidationPipe implements PipeTransform {
  transform(value: CreateUserDto) {
    console.log('my custom validation pipe : ', value);

    if (value.age < 18) {
      throw new HttpException(
        'Age must be greater than 18',
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
