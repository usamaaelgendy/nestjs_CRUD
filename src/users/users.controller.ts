import { Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UsersController {
  @Get()
  find(): string {
    return 'Find all users';
  }

  @Get()
  findOne(): string {
    return 'Find One users';
  }

  @Post()
  create(@Req() req: Request): string {
    console.log(req.body);
    return 'Create New User ';
  }

  @Patch()
  update(): string {
    return 'Update User ';
  }

  @Delete()
  remove(): string {
    return 'Delete User ';
  }
}
