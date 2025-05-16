import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDayDto {
  @ApiProperty({
    description: 'Nome do dia da semana',
    example: 'Segunda-feira',
  })
  @IsNotEmpty({ message: 'O dia é obrigatório.' })
  @IsString({ message: 'O dia deve ser uma string.' })
  dia: string;
}
