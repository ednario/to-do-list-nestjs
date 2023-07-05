import { Module } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';

import { TaskRepository } from '@tasks/repositories/TaskRepository';
import { PrismaTaskRepository } from '@infra/database/prisma/repositories/prisma-tasks.repository';

import { UserRepository } from '@users/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/prisma-users.repository';
@Module({
  providers: [
    PrismaService,
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [TaskRepository, UserRepository],
})
export class DatabaseModule {}
