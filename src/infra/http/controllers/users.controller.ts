import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '@users/useCases/createUser/CreateUserUseCase';
import { ListUsersUseCase } from '@users/useCases/listUsers/ListUsersUseCase';

import { CreateUserBody } from '@infra/http/dtos/create-user-body';
import { UserViewModel } from '@infra/http/view-models/user-view-model';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUserUseCase,
    private list: ListUsersUseCase,
  ) {}

  @Get()
  async listAll() {
    const users = await this.list.listAll();

    return users;
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name } = body;

    const { user } = await this.createUser.execute({
      name,
    });

    return UserViewModel.toHTTP(user);
  }
}
