import { UserRepositoryInMemory } from '@test/repositories/UserRepositoryInMemory';
import { ListUsersUseCase } from './ListUsersUseCase';

describe('List Users', () => {
  it('should be able to return all users', async () => {
    const userRepository = new UserRepositoryInMemory();
    const listUsers = new ListUsersUseCase(userRepository);

    const users = await listUsers.listAll();

    expect(userRepository.users).toEqual(users);
  });
});
