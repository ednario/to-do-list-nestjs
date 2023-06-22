import { Task } from '@tasks/entities/Task';
import { Title } from '@tasks/entities/Title';
import { Description } from '@tasks/entities/Description';

let task: Task;

describe('Task', () => {
  beforeEach(() => {
    task = new Task({
      title: new Title('Passeio'),
      description: new Description('Lever os cães para o passeio'),
      completed: true,
      // dueDate: new Date('December 17, 2023 03:24:00'),
      createdAt: new Date(),
    });
  });

  it('should be able to create a task', () => {
    expect(task).toBeTruthy();
  });
});
