import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { CompletedTaskUseCase } from './CompletedTaskUseCase';
import { makeTask } from '@test/factories/TaskFactory';

describe('Canceled Task', () => {
  it('should be able to unread a task', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const completedTask = new CompletedTaskUseCase(taskRepository);

    const task = makeTask();

    await taskRepository.create(task);

    await completedTask.execute({
      taskId: task.id,
    });

    expect(taskRepository.tasks[0].completed).toEqual(true);
  });
});
