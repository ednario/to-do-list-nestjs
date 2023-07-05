import { User as RawUser } from '@prisma/client';
import { User } from '@users/entities/User';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        name: raw.name,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
