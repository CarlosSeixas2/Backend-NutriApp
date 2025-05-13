import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate } from 'class-validator';

export default class CreatePatientDto {
  @ApiProperty({
    description: 'Data de nascimento do paciente',
    example: '1995-08-15',
    type: String,
    format: 'date',
  })
  @IsNotEmpty({ message: 'A data de aniversário é obrigatória.' })
  @Type(() => Date)
  @IsDate({ message: 'Data de aniversário inválida.' })
  dataNascimento: Date;

  @ApiProperty({
    description: 'Peso do paciente em quilogramas (kg)',
    example: 70.5,
    type: Number,
  })
  @IsNotEmpty({ message: 'O peso é obrigatório.' })
  peso: number;

  @ApiProperty({
    description: 'Altura do paciente em metros (m)',
    example: 1.75,
    type: Number,
  })
  @IsNotEmpty({ message: 'A altura é obrigatória.' })
  altura: number;
}
