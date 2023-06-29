import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasks } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { CreateTaskBody } from '@infra/http/dtos/create-task-body';
import { TaskViewModel } from '@infra/http/view-models/task-view-model';

@Controller('tasks')
export class TasksController {
  constructor(private createTask: CreateTaskUseCase, private list: ListTasks) {}

  @Get()
  async listAll() {
    const tasks = await this.list.listAll();

    return tasks ;
  }

  @Post()
  async create(@Body() body: CreateTaskBody) {
    const { title, description } = body;

    const { task } = await this.createTask.execute({
      title,
      description,
    });

    return TaskViewModel.toHTTP(task);
  }
}
