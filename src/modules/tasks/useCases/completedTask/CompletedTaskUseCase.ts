import { Injectable } from '@nestjs/common';

import { TaskRepository } from '@tasks/repositories/TaskRepository';
import { TaskNotFound } from '@errors/TaskNotFound';

interface CompletedTaskRequest {
  taskId: string;
}

type CompletedTaskResponse = void;

@Injectable()
export class CompletedTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(request: CompletedTaskRequest): Promise<CompletedTaskResponse> {
    const { taskId } = request;

    const notification = await this.taskRepository.findById(taskId);

    if (!notification) {
      throw new TaskNotFound();
    }

    notification.completedTask();

    await this.taskRepository.save(notification);
  }
}
