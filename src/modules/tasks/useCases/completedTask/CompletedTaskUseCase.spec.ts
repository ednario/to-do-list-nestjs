import { TaskRepositoryInMemory } from '@test/repositories/TaskRepositoryInMemory';
import { completedTaskUseCase } from './CompletedTaskUseCase';
import { makeTask } from '@test/factories/TaskFactory';

describe('Canceled Task', () => {
  it('should be able to unread a task', async () => {
    const taskRepository = new TaskRepositoryInMemory();
    const completedTask = new completedTaskUseCase(taskRepository);

    const task = makeTask();

    await taskRepository.create(task);

    await completedTask.execute({
      taskId: task.id,
    });
    console.log(taskRepository.tasks[0].completed);

    expect(taskRepository.tasks[0].completed).toEqual(true);
  });
});
