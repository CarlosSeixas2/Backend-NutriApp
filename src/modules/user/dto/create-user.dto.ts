import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'Carlos Silva',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome: string;

  @ApiProperty({
    description: 'Email válido do usuário',
    example: 'carlos@email.com',
  })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário (mínimo 6 caracteres)',
    example: 'senha123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  senha: string;

  @ApiProperty({
    description: 'CPF do usuário (apenas números)',
    example: '12345678909',
  })
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @MinLength(11, { message: 'O CPF deve ter 11 dígitos.' })
  cpf: string;

  @ApiProperty({
    description: 'Número de telefone para contato',
    example: '86999998888',
  })
  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  telefone: string;

  @ApiPropertyOptional({
    description: 'URL do avatar do usuário',
    example: 'https://exemplo.com/avatar.jpg',
  })
  @IsOptional()
  avatar: string;

  @ApiProperty({
    description: 'Gênero do usuário',
    example: 'Masculino',
  })
  @IsNotEmpty({ message: 'O gênero é obrigatório.' })
  genero: string;

  @ApiPropertyOptional({
    description: 'Novo ID do profissional (caso aplicável)',
    example: 'pro-654321',
  })
  @IsOptional()
  profissionalId?: string;

  @ApiPropertyOptional({
    description: 'Novo ID do paciente (caso aplicável)',
    example: 'pac-123456',
  })
  @IsOptional()
  pacienteId?: string;
}
