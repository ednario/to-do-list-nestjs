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

  async findById(taskId: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      return null;
    }

    return PrismaTaskMapper.toDomain(task);
  }

  async save(task: Task): Promise<void> {
    const raw = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(taskId: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
