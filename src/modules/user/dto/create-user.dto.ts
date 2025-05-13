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
    description: 'Número de telefone para contato',
    example: '(86) 99999-8888',
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
}
