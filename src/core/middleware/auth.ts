import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Auth Middleware...');
    console.log(req.body);
    const { authorization } = req.headers;

    console.log(authorization);
    if (authorization != 'FromPostman') {
      throw new HttpException('User not authorized', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
