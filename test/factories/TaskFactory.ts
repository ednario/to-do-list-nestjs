import { Description } from '@tasks/entities/Description';
import { Task, TaskProps } from '@tasks/entities/Task';
import { Title } from '@tasks/entities/Title';

type Override = Partial<TaskProps>;

export function makeTask(override: Override = {}) {
  const task = new Task({
    title: new Title('Passeio'),
    description: new Description('Lever os cães para o passeio'),
    // dueDate: new Date('December 17, 2023 03:24:00'),
    authorId: 'edwqsdfgdfgdf',
    ...override,
  });
  return task;
}
