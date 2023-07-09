import { Injectable } from '@nestjs/common';

import { TaskRepository } from '@tasks/repositories/TaskRepository';

@Injectable()
export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(request: string): Promise<void> {
    await this.taskRepository.delete(request);
  }
}
