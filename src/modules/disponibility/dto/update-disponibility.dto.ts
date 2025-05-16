import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID, Matches } from 'class-validator';

export class UpdateDisponibilityDto {
  @ApiPropertyOptional({
    description: 'ID do dia da semana',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsOptional()
  @IsUUID('4', { message: 'O ID do dia da semana deve ser um UUID válido.' })
  diaSemanaId?: string;

  @ApiPropertyOptional({
    description: 'ID do profissional',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsOptional()
  @IsUUID('4', { message: 'O ID do profissional deve ser um UUID válido.' })
  profissionalId?: string;

  @ApiPropertyOptional({
    description: 'ID do local de atendimento',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsOptional()
  @IsUUID('4', {
    message: 'O ID do local de atendimento deve ser um UUID válido.',
  })
  clinicaId?: string;

  @ApiPropertyOptional({
    description: 'Hora de início da disponibilidade (formato HH:mm)',
    example: '08:00',
  })
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'Hora de início inválida. Use o formato HH:mm.',
  })
  horaInicio?: string;

  @ApiPropertyOptional({
    description: 'Hora de fim da disponibilidade (formato HH:mm)',
    example: '12:00',
  })
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'Hora de fim inválida. Use o formato HH:mm.',
  })
  horaFim?: string;
}
