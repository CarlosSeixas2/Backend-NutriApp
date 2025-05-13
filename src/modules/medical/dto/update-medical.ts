import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { TipoRegistro } from 'generated/prisma';

export class UpdateMedicalDto {
  @ApiPropertyOptional({
    description: 'Novo tipo de registro do profissional',
    example: 'CRM',
    enum: TipoRegistro,
  })
  @IsOptional()
  @IsEnum(TipoRegistro, { message: 'Tipo de registro inválido.' })
  tipoRegistro?: TipoRegistro;

  @ApiPropertyOptional({
    description: 'Novo número do registro profissional',
    example: '654321',
  })
  @IsOptional()
  numeroRegistro?: string;

  @ApiPropertyOptional({
    description: 'Nova unidade federativa do registro',
    example: 'CE',
  })
  @IsOptional()
  uf?: string;

  @ApiPropertyOptional({
    description: 'Nova descrição do profissional',
    example: 'Especialista em atendimentos ambulatoriais.',
  })
  @IsOptional()
  descricao?: string;

  @ApiPropertyOptional({
    description: 'Nova instituição formadora',
    example: 'UFMA',
  })
  @IsOptional()
  instituicaoFormadora?: string;

  @ApiPropertyOptional({
    description: 'Novo tipo de profissional',
    example: 'Fisioterapeuta',
  })
  @IsOptional()
  tipoProfissional?: string;

  @ApiPropertyOptional({
    description: 'Nova especialidade do profissional',
    example: 'Ortopedia',
  })
  @IsOptional()
  especialidade?: string;
}
