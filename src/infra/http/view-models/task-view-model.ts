import { Task } from '@tasks/entities/Task';

export class TaskViewModel {
  static toHTTP(task: Task) {
    return {
      id: task.id,
      title: task.title.value,
      description: task.description.value,
      completed: task.completed,
      authorId: task.authorId,
    };
  }
}
