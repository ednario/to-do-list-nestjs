import { Injectable } from '@nestjs/common';

import { UserRepository } from '@users/repositories/UserRepository';
import { User } from '@users/entities/User';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: raw,
    });
  }

  async listAll(): Promise<any> {
    return await this.prisma.user.findMany();
  }

  findById(userId: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
