import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClinicaDto {
  @ApiProperty({
    description: 'Nome fantasia da clínica',
    example: 'Clínica Bem Estar',
  })
  @IsNotEmpty({ message: 'O nome fantasia é obrigatório.' })
  @IsString({ message: 'O nome fantasia deve ser uma string.' })
  nomeFantasia: string;

  @ApiProperty({
    description: 'Razão social da clínica',
    example: 'Bem Estar Serviços Médicos LTDA',
  })
  @IsNotEmpty({ message: 'A razão social é obrigatória.' })
  @IsString({ message: 'A razão social deve ser uma string.' })
  razaoSocial: string;

  @ApiProperty({
    description: 'CNPJ da clínica',
    example: '12345678000199',
  })
  @IsNotEmpty({ message: 'O CNPJ é obrigatório.' })
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  cnpj: string;

  @ApiProperty({
    description: 'Inscrição estadual da clínica',
    example: '1234567890',
  })
  @IsNotEmpty({ message: 'A inscrição estadual é obrigatória.' })
  @IsString({ message: 'A inscrição estadual deve ser uma string.' })
  inscricaoEstadual: string;

  @ApiProperty({
    description: 'Telefone da clínica',
    example: '86998765432',
  })
  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone: string;

  @ApiProperty({
    description: 'Tipo de atendimento da clínica',
    example: 'Presencial',
  })
  @IsNotEmpty({ message: 'O tipo de atendimento é obrigatório.' })
  @IsString({ message: 'O tipo de atendimento deve ser uma string.' })
  tipoAtendimento: string;
}
