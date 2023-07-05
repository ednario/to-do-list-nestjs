import { User } from '@users/entities/User';
import { UserRepository } from '@users/repositories/UserRepository';

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }

  async listAll(): Promise<User[]> {
    return this.users;
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((item) => item.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex((item) => item.id === user.id);

    if (userIndex >= 0) {
      this.users[userIndex];
    }
  }
}
