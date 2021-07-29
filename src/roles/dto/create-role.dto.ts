import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'Имя роли' })
  @IsString({ message: 'Должно быть строчкой' })
  readonly value: string;

  @ApiProperty({ example: 'Пользователь', description: 'Описание роли' })
  @IsString({ message: 'Должно быть строчкой' })
  readonly description: string;
}
