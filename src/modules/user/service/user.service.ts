import * as bcrypt from 'bcrypt';

import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import UserRepository from '../repository/user-repository';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async listAll() {
    return await this.userRepository.listAll();
  }

  async findById(id: string) {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Email não encontrado');
    }

    return user;
  }

  async register(data: CreateUserDto) {
    const emailExists = await this.userRepository.findByEmail(data.email);
    const cpfExists = await this.userRepository.findByCpf(data.cpf);

    if (emailExists && cpfExists) {
      throw new ConflictException('Email e CPF já estão em uso');
    }

    if (emailExists) {
      throw new ConflictException('Email já está em uso');
    }

    if (cpfExists) {
      throw new ConflictException('CPF já está em uso');
    }

    const hashedPassword = await bcrypt.hash(data.senha, 10);

    const user = await this.userRepository.create({
      ...data,
      senha: hashedPassword,
    });

    const token = this.jwtService.sign({ sub: user.id, email: user.email });

    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = this.jwtService.sign({ sub: user.id, email: user.email });

    return { token };
  }

  async delete(id: string) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new ConflictException('Usuario não encontrado');
    }

    return await this.userRepository.delete(id);
  }

  async update(id: string, data: UpdateUserDto) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new ConflictException('Usuario não encontrado');
    }

    return await this.userRepository.update(id, data);
  }
}
