import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import { AgeValidationPipe } from './pipes/age-validation.pipe';
import { AuthGuard } from '../core/guard/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UserService) {}

  private readonly users: UserEntity[] = [];

  @Post()
  create(
    @Body(AgeValidationPipe)
    createUserDto: CreateUserDto,
  ): UserEntity {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(AgeValidationPipe)
    updateUserDto: UpdateUserDto,
  ): UpdateUserDto {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Get()
  findAll(@Query('username') username: string): UserEntity[] {
    console.log(username);
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): UserEntity {
    return this.userService.findUserById(id);
  }

  @Delete(':id')
  removeUser(@Param('id', ParseUUIDPipe) id: any): boolean {
    return this.userService.removeUser(id);
  }
}
