import { Injectable } from '@nestjs/common';
import { CreateMedicalDto } from '../dto/create-medical';
import { UpdateMedicalDto } from '../dto/update-medical';
import { Profissional } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma/prisma.service';

export abstract class MedicalInterfaceClass {
  abstract findById(id: string): Promise<Profissional | null>;
  abstract listAll(): Promise<Profissional[]>;
  abstract create(data: CreateMedicalDto): Promise<Profissional>;
  abstract update(id: string, data: UpdateMedicalDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export default class MedicalRepository implements MedicalInterfaceClass {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.profissional.findUnique({
      where: {
        id,
      },
    });
  }

  async listAll() {
    return await this.prisma.profissional.findMany();
  }

  async create(data: CreateMedicalDto) {
    return await this.prisma.profissional.create({
      data,
    });
  }

  async update(id: string, data: UpdateMedicalDto): Promise<void> {
    await this.prisma.profissional.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.profissional.delete({
      where: {
        id,
      },
    });
  }
}
