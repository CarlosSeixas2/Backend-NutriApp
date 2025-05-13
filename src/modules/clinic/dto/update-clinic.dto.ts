import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClinicaDto {
  @ApiPropertyOptional({
    description: 'Nome fantasia da clínica',
    example: 'Clínica Bem Estar Atualizada',
  })
  @IsOptional()
  @IsString({ message: 'O nome fantasia deve ser uma string.' })
  nomeFantasia?: string;

  @ApiPropertyOptional({
    description: 'Razão social da clínica',
    example: 'Bem Estar Serviços Médicos Atualizados LTDA',
  })
  @IsOptional()
  @IsString({ message: 'A razão social deve ser uma string.' })
  razaoSocial?: string;

  @ApiPropertyOptional({
    description: 'CNPJ da clínica',
    example: '12.345.678/0001-00',
  })
  @IsOptional()
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  cnpj?: string;

  @ApiPropertyOptional({
    description: 'Inscrição estadual da clínica',
    example: '9876543210',
  })
  @IsOptional()
  @IsString({ message: 'A inscrição estadual deve ser uma string.' })
  inscricaoEstadual?: string;

  @ApiPropertyOptional({
    description: 'Telefone da clínica',
    example: '(86) 91234-5678',
  })
  @IsOptional()
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone?: string;

  @ApiPropertyOptional({
    description: 'Tipo de atendimento da clínica',
    example: 'Online',
  })
  @IsOptional()
  @IsString({ message: 'O tipo de atendimento deve ser uma string.' })
  tipoAtendimento?: string;
}
