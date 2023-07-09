import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateTaskUseCase } from '@tasks/useCases/createTask/CreateTaskUseCase';
import { ListTasksUseCase } from '@tasks/useCases/listTasks/ListTasksUseCase';

import { CreateTaskBody } from '@infra/http/dtos/create-task-body';
import { TaskViewModel } from '@infra/http/view-models/task-view-model';
import { DeleteTaskUseCase } from '@tasks/useCases/deleteTask/DeleteTaskUseCase';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(
    private createTask: CreateTaskUseCase,
    private list: ListTasksUseCase,
    private deleteTask: DeleteTaskUseCase,
  ) {}

  @Get()
  async listAll() {
    const tasks = await this.list.listAll();

    return tasks;
  }

  @Post()
  async create(@Body() body: CreateTaskBody) {
    const { title, description, authorId } = body;

    const { task } = await this.createTask.execute({
      title,
      description,
      authorId,
    });

    return TaskViewModel.toHTTP(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteTask.execute(id);
  }
}
