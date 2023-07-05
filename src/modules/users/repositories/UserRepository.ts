import { User } from '@users/entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract listAll(): Promise<User[]>;
  abstract findById(userId: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
}
