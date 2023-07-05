import { UserRepositoryInMemory } from '@test/repositories/UserRepositoryInMemory';
import { ListUsers } from './ListUsersUseCase';

describe('List Users', () => {
  it('should be able to return all users', async () => {
    const userRepository = new UserRepositoryInMemory();
    const listUsers = new ListUsers(userRepository);

    const users = await listUsers.listAll();

    expect(userRepository.users).toEqual(users);
  });
});
