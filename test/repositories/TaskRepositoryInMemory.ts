import { Task } from '@tasks/entities/Task';
import { TaskRepository } from '@tasks/repositories/TaskRepository';

export class TaskRepositoryInMemory implements TaskRepository {
  public tasks: Task[] = [];

  async create(task: Task) {
    this.tasks.push(task);
  }

  async listAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(taskId: string): Promise<Task> {
    const task = this.tasks.find((item) => item.id === taskId);

    if (!task) {
      throw 'Task is not exists';
    }

    return task;
  }

  async save(task: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex((item) => item.id === task.id);

    if (taskIndex >= 0) {
      this.tasks[taskIndex];
    }
  }

  async delete(taskId: string): Promise<void> {
    const task = await this.findById(taskId);

    this.tasks.splice(1, 1, task);
  }
}
