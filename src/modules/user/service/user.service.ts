/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bcrypt from 'bcrypt';

import {
  Injectable,
  ConflictException,
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
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return user;
  }

  async register(data: CreateUserDto) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new ConflictException('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(data.senha, 10);

    const user = await this.userRepository.create({
      ...data,
      senha: hashedPassword,
    });

    const payload = { sub: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    const { senha, ...userData } = user;

    return { userData, token };
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
