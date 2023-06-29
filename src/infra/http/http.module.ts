import { Module } from '@nestjs/common';

import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasks } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { DatabaseModule } from '@infra/database/database.module';
import { TasksController } from '@infra/http/controllers/tasks.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [CreateTaskUseCase, ListTasks],
})
export class HttpModule {}
