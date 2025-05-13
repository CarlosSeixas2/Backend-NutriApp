import { Injectable } from '@nestjs/common';
import { Usuario } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export abstract class UserInterfaceClass {
  abstract findById(id: string): Promise<Usuario | null>;
  abstract findByEmail(email: string): Promise<Usuario | null>;
  abstract listAll(): Promise<Usuario[]>;
  abstract create(data: CreateUserDto): Promise<Usuario>;
  abstract update(id: string, data: UpdateUserDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export default class UserRepository implements UserInterfaceClass {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async listAll() {
    return await this.prisma.usuario.findMany();
  }

  async create(data: CreateUserDto) {
    return await this.prisma.usuario.create({ data });
  }

  async update(id: string, data: UpdateUserDto) {
    await this.prisma.usuario.update({
      where: { id },
      data,
    });
    return;
  }

  async delete(id: string) {
    await this.prisma.usuario.delete({
      where: { id },
    });
    return;
  }
}
