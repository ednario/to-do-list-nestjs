import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { Title } from '@tasks/entities/Title';
import { Description } from '@tasks/entities/Description';

describe('Create Task', () => {
  it('should be able to create a task', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const createTask = new CreateTaskUseCase(taskRepository);

    const { task } = await createTask.execute({
      title: new Title('Passeio'),
      description: new Description('Lever os cães para o passeio'),
      dueDate: new Date('December 17, 2023 03:24:00'),
    });

    expect(taskRepository.tasks).toHaveLength(1);
    expect(taskRepository.tasks[0]).toEqual(task);
  });
});
