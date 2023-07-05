import { Injectable } from '@nestjs/common';
import { User } from '@users/entities/User';
import { UserRepository } from '@users/repositories/UserRepository';

@Injectable()
export class ListUsers {
  constructor(private userRepository: UserRepository) {}

  async listAll(): Promise<Array<User>> {
    const users = await this.userRepository.listAll();

    return users;
  }
}
