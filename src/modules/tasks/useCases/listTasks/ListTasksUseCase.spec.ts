import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { ListTasks } from './ListTasksUseCase';

describe('List Tasks', () => {
  it('should be able to return all tasks', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const listTasks = new ListTasks(taskRepository);

    const tasks = await listTasks.listAll();

    expect(taskRepository.tasks).toEqual(tasks);
  });
});
