import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any) {
    console.log('my custom validation pipe : ', value);
    return value;
  }
}
