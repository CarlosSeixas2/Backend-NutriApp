import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdressDto {
  @ApiProperty({
    description: 'Nome da rua do endereço',
    example: 'Rua das Flores',
  })
  @IsNotEmpty({ message: 'A rua é obrigatória.' })
  @IsString({ message: 'A rua deve ser uma string.' })
  rua: string;

  @ApiProperty({
    description: 'Bairro do endereço',
    example: 'Centro',
  })
  @IsNotEmpty({ message: 'O bairro é obrigatório.' })
  @IsString({ message: 'O bairro deve ser uma string.' })
  bairro: string;

  @ApiProperty({
    description: 'CEP do endereço',
    example: '64200000',
  })
  @IsNotEmpty({ message: 'O CEP é obrigatório.' })
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep: string;

  @ApiProperty({
    description: 'Complemento do endereço',
    example: 'Apartamento 101',
  })
  @IsNotEmpty({ message: 'O complemento é obrigatório.' })
  @IsString({ message: 'O complemento deve ser uma string.' })
  complemento: string;

  @ApiProperty({
    description: 'Estado do endereço',
    example: 'PI',
  })
  @IsNotEmpty({ message: 'O estado é obrigatório.' })
  @IsString({ message: 'O estado deve ser uma string.' })
  estado: string;

  @ApiProperty({
    description: 'Cidade do endereço',
    example: 'Parnaíba',
  })
  @IsNotEmpty({ message: 'A cidade é obrigatória.' })
  @IsString({ message: 'A cidade deve ser uma string.' })
  cidade: string;

  @ApiProperty({
    description: 'Número do endereço',
    example: '1234',
  })
  @IsNotEmpty({ message: 'O número é obrigatório.' })
  @IsString({ message: 'O número deve ser uma string.' })
  numero: string;
}
