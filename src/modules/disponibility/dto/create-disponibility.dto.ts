import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDisponibilityDto {
  @ApiProperty({
    description: 'ID do dia da semana',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsNotEmpty({ message: 'O dia da semana é obrigatório.' })
  @IsUUID('4', { message: 'O ID do dia da semana deve ser um UUID válido.' })
  diaSemanaId: string;

  @ApiProperty({
    description: 'ID do profissional',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsNotEmpty({ message: 'O profissional é obrigatório.' })
  @IsUUID('4', { message: 'O ID do profissional deve ser um UUID válido.' })
  profissionalId: string;

  @ApiProperty({
    description: 'ID do local de atendimento',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  @IsNotEmpty({ message: 'O local de atendimento é obrigatório.' })
  @IsUUID('4', {
    message: 'O ID da clinica deve ser um UUID válido.',
  })
  clinicaId: string;

  @ApiProperty({
    description: 'Hora de início da disponibilidade (formato HH:mm:ss)',
    example: '08:00:00',
  })
  @IsNotEmpty({ message: 'A hora de início é obrigatória.' })
  horaInicio: string;

  @ApiProperty({
    description: 'Hora de fim da disponibilidade (formato HH:mm:ss)',
    example: '12:00:00',
  })
  @IsNotEmpty({ message: 'A hora de fim é obrigatória.' })
  horaFim: string;
}
