import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { TasksController } from '@infra/http/controllers/tasks.controller';
import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasksUseCase } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { UsersController } from '@infra/http/controllers/users.controller';
import { CreateUserUseCase } from '@users/useCases/createUser/CreateUserUseCase';
import { ListUsersUseCase } from '@users/useCases/listUsers/ListUsersUseCase';
import { DeleteTaskUseCase } from '@tasks/useCases/deleteTask/DeleteTaskUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController, UsersController],
  providers: [
    CreateTaskUseCase,
    ListTasksUseCase,
    DeleteTaskUseCase,
    CreateUserUseCase,
    ListUsersUseCase,
  ],
})
export class HttpModule {}
