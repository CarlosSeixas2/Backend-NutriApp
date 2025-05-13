import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Paciente } from 'generated/prisma';
import CreatePatientDto from '../dto/create-patient';
import UpdatePatientDto from '../dto/update-patient';

export abstract class PatientInterfaceClass {
  abstract findById(id: string): Promise<Paciente | null>;
  abstract listAll(): Promise<Paciente[]>;
  abstract create(data: any): Promise<Paciente>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, data: any): Promise<void>;
}

@Injectable()
export default class PatientRepository implements PatientInterfaceClass {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  async listAll() {
    return await this.prisma.paciente.findMany();
  }

  async create(data: CreatePatientDto) {
    return await this.prisma.paciente.create({ data });
  }

  async update(id: string, data: UpdatePatientDto): Promise<void> {
    await this.prisma.paciente.update({
      where: { id },
      data,
    });

    return;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.paciente.delete({
      where: { id },
    });

    return;
  }
}
