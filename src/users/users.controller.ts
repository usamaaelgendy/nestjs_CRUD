import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}

  private readonly users: UserEntity[] = [];

  @Post()
  create(@Body() createUserDto: CreateUserDto): UserEntity {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): UserEntity[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): UserEntity {
    return this.userService.findById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): UpdateUserDto {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id', ParseUUIDPipe) id: any): boolean {
    return this.userService.remove(id);
  }
}
