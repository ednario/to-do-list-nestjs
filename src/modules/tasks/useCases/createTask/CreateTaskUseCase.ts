import { Injectable } from '@nestjs/common';

import { Description } from '@tasks/entities/Description';
import { Task } from '@tasks/entities/Task';
import { Title } from '@tasks/entities/Title';
import { TaskRepository } from '@tasks/repositories/TaskRepository';

interface CreateTaskRequest {
  title: string;
  description: string;
  completed?: boolean;
  authorId: string;
  // dueDate?: Date | null;
}

interface CreateTaskResponse {
  task: Task;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    const { title, description, authorId } = request;

    const task = new Task({
      title: new Title(title),
      description: new Description(description),
      authorId: authorId,
    });

    await this.taskRepository.create(task);

    return { task };
  }
}
