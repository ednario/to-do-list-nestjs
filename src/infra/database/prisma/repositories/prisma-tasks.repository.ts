import { Injectable } from '@nestjs/common';

import { TaskRepository } from '@tasks/repositories/TaskRepository';
import { Task } from '@tasks/entities/Task';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaTaskMapper } from '@infra/database/prisma/mappers/prisma-task-mapper';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    const raw = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.create({
      data: raw,
    });
  }

  async listAll(): Promise<any> {
    return await this.prisma.task.findMany();
  }

  findById(taskId: string): Promise<Task | null> {
    throw new Error('Method not implemented.');
  }
  save(task: Task): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(taskId: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
