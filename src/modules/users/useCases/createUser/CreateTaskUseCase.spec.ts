import { UserRepositoryInMemory } from '@test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('Create User', () => {
  it('should be able to create a user', async () => {
    const userRepository = new UserRepositoryInMemory();
    const createUser = new CreateUserUseCase(userRepository);

    const { user } = await createUser.execute({
      name: 'Ednario Andrade',
    });

    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
