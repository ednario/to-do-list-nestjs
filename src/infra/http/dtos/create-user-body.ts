import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @ApiProperty({
    example: 'Ednario Andrade',
  })
  @IsNotEmpty()
  name: string;
}
