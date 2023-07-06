import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { TasksController } from '@infra/http/controllers/tasks.controller';
import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasksUseCase } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { UsersController } from '@infra/http/controllers/users.controller';
import { CreateUserUseCase } from '@users/useCases/createUser/CreateUserUseCase';
import { ListUsersUseCase } from '@users/useCases/listUsers/ListUsersUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController, UsersController],
  providers: [
    CreateTaskUseCase,
    ListTasksUseCase,
    CreateUserUseCase,
    ListUsersUseCase,
  ],
})
export class HttpModule {}
