import { IsNotEmpty, Length } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  @Length(5, 240)
  title: string;

  @IsNotEmpty()
  @Length(1, 50)
  description: string;
}
