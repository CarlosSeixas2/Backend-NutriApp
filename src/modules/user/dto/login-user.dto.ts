import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'Email de acesso do usuário',
    example: 'carlos@email.com',
  })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  @ApiProperty({
    description: 'Senha de acesso (mínimo 6 caracteres)',
    example: 'senha123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  senha: string;
}
