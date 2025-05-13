import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAdressDto {
  @ApiPropertyOptional({
    description: 'Nome da rua do endereço',
    example: 'Rua das Flores',
  })
  @IsOptional()
  @IsString({ message: 'A rua deve ser uma string.' })
  rua?: string;

  @ApiPropertyOptional({
    description: 'Bairro do endereço',
    example: 'Centro',
  })
  @IsOptional()
  @IsString({ message: 'O bairro deve ser uma string.' })
  bairro?: string;

  @ApiPropertyOptional({
    description: 'CEP do endereço',
    example: '64200-000',
  })
  @IsOptional()
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep?: string;

  @ApiPropertyOptional({
    description: 'Complemento do endereço',
    example: 'Apartamento 101',
  })
  @IsOptional()
  @IsString({ message: 'O complemento deve ser uma string.' })
  complemento?: string;

  @ApiPropertyOptional({
    description: 'Estado do endereço',
    example: 'PI',
  })
  @IsOptional()
  @IsString({ message: 'O estado deve ser uma string.' })
  estado?: string;

  @ApiPropertyOptional({
    description: 'Cidade do endereço',
    example: 'Parnaíba',
  })
  @IsOptional()
  @IsString({ message: 'A cidade deve ser uma string.' })
  cidade?: string;

  @ApiPropertyOptional({
    description: 'Número do endereço',
    example: '1234',
  })
  @IsOptional()
  @IsString({ message: 'O número deve ser uma string.' })
  numero?: string;
}
