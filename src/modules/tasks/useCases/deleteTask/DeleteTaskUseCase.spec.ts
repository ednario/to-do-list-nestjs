import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from '../createTask/CreateTaskUseCase';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

describe('Delete Task', () => {
  it('should be able to delete a task', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const createTask = new CreateTaskUseCase(taskRepository);
    const deleteTask = new DeleteTaskUseCase(taskRepository);

    const { task } = await createTask.execute({
      title: 'Passeio',
      description: 'Lever os cães para o passeio',
      authorId: 'inuifbnuogfovdfvfvdvdvddghnim',
    });

    await deleteTask.execute(task.id);

    // it was post toHaveLength(2) because it has completed and create UseCases
    expect(taskRepository.tasks).toHaveLength(2);
  });
});
