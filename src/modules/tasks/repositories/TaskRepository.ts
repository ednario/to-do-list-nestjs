import { Task } from '@tasks/entities/Task';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<void>;
  abstract listAll(): Promise<Task[]>;
  abstract findById(taskId: string): Promise<Task | null>;
  abstract save(task: Task): Promise<void>;
  abstract delete(taskId: string): Promise<void>;
}
