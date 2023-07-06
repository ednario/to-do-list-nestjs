import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('to-do list')
  .setDescription('The to-do list API description')
  .setVersion('1.0')
  .build();
