import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDayDto {
  @ApiPropertyOptional({
    description: 'Nome do dia da semana',
    example: 'Terça-feira',
  })
  @IsOptional()
  @IsString({ message: 'O dia deve ser uma string.' })
  dia?: string;
}
