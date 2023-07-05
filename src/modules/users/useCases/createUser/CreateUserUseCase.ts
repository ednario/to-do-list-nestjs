import { Injectable } from '@nestjs/common';

import { User } from '@users/entities/User';
import { UserRepository } from '@users/repositories/UserRepository';

interface CreateUserRequest {
  name: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name } = request;

    const user = new User({ name: name });

    await this.userRepository.create(user);

    return { user };
  }
}
