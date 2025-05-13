import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Nome completo do usuário',
    example: 'Carlos Silva',
  })
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({
    description: 'Email atualizado do usuário',
    example: 'novoemail@email.com',
  })
  @IsOptional()
  @IsEmail({}, { message: 'Email inválido.' })
  email?: string;

  @ApiPropertyOptional({
    description: 'Nova senha (mínimo 6 caracteres)',
    example: 'novaSenha123',
    minLength: 6,
  })
  @IsOptional()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  senha?: string;

  @ApiPropertyOptional({
    description: 'Número de telefone atualizado',
    example: '(86) 98888-7777',
  })
  @IsOptional()
  telefone?: string;

  @ApiPropertyOptional({
    description: 'Nova URL do avatar',
    example: 'https://exemplo.com/novo-avatar.jpg',
  })
  @IsOptional()
  avatar?: string;

  @ApiPropertyOptional({
    description: 'Gênero atualizado do usuário',
    example: 'Feminino',
  })
  @IsOptional()
  genero?: string;

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
