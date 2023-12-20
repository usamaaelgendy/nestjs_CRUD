import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { v4 as uuid } from 'uuid';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  private readonly users: UserEntity[] = [];

  create(createUserDto: CreateUserDto): UserEntity {
    const newUser: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAllUsers(): UserEntity[] {
    return this.users;
  }

  findUserById(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };

    return this.users[userIndex];
  }

  removeUser(id: string): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userIndex, 1);
    return true;
  }
}
