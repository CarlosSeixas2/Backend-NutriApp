import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDate } from 'class-validator';

export default class UpdatePatientDto {
  @ApiPropertyOptional({
    description: 'Nova data de nascimento do paciente',
    example: '1995-08-15',
    type: String,
    format: 'date',
  })
  @IsOptional()
  @IsDate({ message: 'Data de aniversário inválida.' })
  dataNascimento: Date;

  @ApiPropertyOptional({
    description: 'Novo peso do paciente em quilogramas (kg)',
    example: 72.3,
    type: Number,
  })
  @IsOptional()
  peso: number;

  @ApiPropertyOptional({
    description: 'Nova altura do paciente em metros (m)',
    example: 1.78,
    type: Number,
  })
  @IsOptional()
  altura: number;
}
