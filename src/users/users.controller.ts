import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UsersController {
  @Get()
  find(): string {
    return 'Find all users';
  }

  @Get(':username')
  findOne(@Param() param: any): string {
    console.log(param.username);
    return param.username;
  }

  @Post(':username')
  create(@Req() req: Request): string {
    console.log(req.body);
    return 'Create New User ';
  }

  @Patch(':username')
  update(@Param() param: any): string {
    console.log(param.username);
    return param.username;
  }

  @Delete(':username')
  remove(@Param() param: any): string {
    console.log(param.username);
    return param.username;
  }
}
