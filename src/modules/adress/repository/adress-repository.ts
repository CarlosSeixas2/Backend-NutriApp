import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Endereco } from 'generated/prisma';
import { UpdateAdressDto } from '../dto/update-adress.dto';
import { CreateAdressDto } from '../dto/create-adress.dto';

export abstract class AdressInterfaceClass {
  abstract findById(id: string): Promise<Endereco | null>;
  abstract listAll(): Promise<Endereco[]>;
  abstract create(data: CreateAdressDto): Promise<Endereco>;
  abstract update(id: string, data: UpdateAdressDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export default class AdressRepository implements AdressInterfaceClass {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.endereco.findUnique({
      where: { id },
    });
  }

  findByCep(cep: string) {
    return this.prisma.endereco.findFirst({
      where: { cep },
    });
  }

  async listAll() {
    return await this.prisma.endereco.findMany();
  }

  async create(data: CreateAdressDto) {
    return await this.prisma.endereco.create({ data });
  }

  async update(id: string, data: UpdateAdressDto) {
    await this.prisma.endereco.update({
      where: { id },
      data,
    });
    return;
  }

  async delete(id: string) {
    await this.prisma.endereco.delete({
      where: { id },
    });
    return;
  }
}
