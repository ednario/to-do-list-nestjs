import { User } from '@users/entities/User';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
    };
  }
}
