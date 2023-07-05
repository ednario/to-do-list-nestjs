import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { TasksController } from '@infra/http/controllers/tasks.controller';
import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasks } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { UsersController } from '@infra/http/controllers/users.controller';
import { CreateUserUseCase } from '@users/useCases/createUser/CreateUserUseCase';
import { ListUsers } from '@users/useCases/listUsers/ListUsersUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController, UsersController],
  providers: [CreateTaskUseCase, ListTasks, CreateUserUseCase, ListUsers],
})
export class HttpModule {}
