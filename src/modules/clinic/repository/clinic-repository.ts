import { Injectable } from '@nestjs/common';
import { Clinica } from 'generated/prisma';
import { CreateClinicaDto } from '../dto/create-clinic.dto';
import { UpdateClinicaDto } from '../dto/update-clinic.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

export abstract class ClinicInterfaceClass {
  abstract findById(id: string): Promise<Clinica | null>;
  abstract listAll(): Promise<Clinica[]>;
  abstract create(data: CreateClinicaDto): Promise<Clinica>;
  abstract update(id: string, data: UpdateClinicaDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export default class ClinicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.clinica.findUnique({
      where: { id },
    });
  }

  async findByCnpj(cnpj: string) {
    return this.prisma.clinica.findFirst({
      where: { cnpj },
    });
  }

  async listAll() {
    return await this.prisma.clinica.findMany();
  }

  async create(data: CreateClinicaDto) {
    return await this.prisma.clinica.create({ data });
  }

  async update(id: string, data: UpdateClinicaDto) {
    await this.prisma.clinica.update({
      where: { id },
      data,
    });
    return;
  }

  async delete(id: string) {
    await this.prisma.clinica.delete({
      where: { id },
    });
    return;
  }
}
