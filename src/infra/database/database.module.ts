import { Module } from '@nestjs/common';

import { TaskRepository } from '@tasks/repositories/TaskRepository';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaTaskRepository } from '@infra/database/prisma/repositories/prisma-tasks.repository';
@Module({
  providers: [
    PrismaService,
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [TaskRepository],
})
export class DatabaseModule {}
