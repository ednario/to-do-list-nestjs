import { Injectable } from '@nestjs/common';
import { Task } from '@tasks/entities/Task';
import { TaskRepository } from '@tasks/repositories/TaskRepository';

@Injectable()
export class ListTasks {
  constructor(private taskRepository: TaskRepository) {}

  async listAll(): Promise<Array<Task>> {
    const tasks = await this.taskRepository.listAll();

    return tasks;
  }
}
