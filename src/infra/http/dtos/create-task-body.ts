import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateTaskBody {
  @ApiProperty({
    example: 'Rotina',
    description:
      'The task title must have a minimum of 1 characters and a maximum of 50',
  })
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  @ApiProperty({
    example: 'Passeio com os cães',
    description:
      'Task description must be a minimum of 5 characters and a maximum of 240',
  })
  @IsNotEmpty()
  @Length(5, 240)
  description: string;

  @ApiProperty({
    example: "'6b10839d-1863-473a-ac15-cbe261c7cf39'",
    description: 'The userId belonging to the task',
  })
  @IsNotEmpty()
  authorId: string;
}
