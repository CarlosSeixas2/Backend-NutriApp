import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { TipoRegistro } from 'generated/prisma';

export class CreateMedicalDto {
  @ApiProperty({
    description: 'Tipo de registro do profissional',
    example: 'CRM',
    enum: TipoRegistro,
  })
  @IsNotEmpty({ message: 'O tipo de registro é obrigatório.' })
  @IsEnum(TipoRegistro, { message: 'Tipo de registro inválido.' })
  tipoRegistro: TipoRegistro;

  @ApiProperty({
    description: 'Número do registro profissional',
    example: '123456',
  })
  @IsNotEmpty({ message: 'O número do registro é obrigatório.' })
  numeroRegistro: string;

  @ApiProperty({
    description: 'Unidade federativa do registro',
    example: 'PI',
  })
  @IsNotEmpty({ message: 'A UF é obrigatória.' })
  uf: string;

  @ApiProperty({
    description: 'Descrição do profissional',
    example: 'Médico clínico geral com experiência em hospitais públicos.',
  })
  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  descricao: string;

  @ApiProperty({
    description: 'Instituição onde o profissional se formou',
    example: 'Universidade Federal do Piauí',
  })
  @IsNotEmpty({ message: 'A instituição formadora é obrigatória.' })
  instituicaoFormadora: string;

  @ApiProperty({
    description: 'Tipo do profissional (ex: médico, psicólogo)',
    example: 'Médico',
  })
  @IsNotEmpty({ message: 'O tipo profissional é obrigatório.' })
  tipoProfissional: string;

  @ApiProperty({
    description: 'Especialidade do profissional',
    example: 'Cardiologia',
  })
  @IsNotEmpty({ message: 'A especialidade é obrigatória.' })
  especialidade: string;
}
