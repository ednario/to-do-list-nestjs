import { Task as RawTask } from '@prisma/client';
import { Description } from '@tasks/entities/Description';
import { Task } from '@tasks/entities/Task';
import { Title } from '@tasks/entities/Title';

export class PrismaTaskMapper {
  static toPrisma(task: Task) {
    return {
      id: task.id,
      title: task.title.value,
      description: task.description.value,
      completed: task.completed,
      createdAt: task.createdAt,
    };
  }

  static toDomain(raw: RawTask): Task {
    return new Task(
      {
        title: new Title(raw.title),
        description: new Description(raw.description),
        completed: raw.completed,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
