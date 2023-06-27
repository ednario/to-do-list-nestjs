import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from './CreateTaskUseCase';

describe('Create Task', () => {
  it('should be able to create a task', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const createTask = new CreateTaskUseCase(taskRepository);

    const { task } = await createTask.execute({
      title: 'Passeio',
      description: 'Lever os cães para o passeio',
    });

    expect(taskRepository.tasks).toHaveLength(1);
    expect(taskRepository.tasks[0]).toEqual(task);
  });
});
