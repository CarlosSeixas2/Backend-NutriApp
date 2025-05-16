import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateDayDto } from '../dto/create-day.dto';
import { UpdateDayDto } from '../dto/update-day.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class DayRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.diaSemana.findMany();
  }

  async findById(id: string) {
    return await this.prisma.diaSemana.findUnique({
      where: { id },
    });
  }

  async create(dto: CreateDayDto) {
    return await this.prisma.diaSemana.create({
      data: { dia: dto.dia },
    });
  }

  async update(id: string, dto: UpdateDayDto) {
    return await this.prisma.diaSemana.update({
      where: { id },
      data: { dia: dto.dia },
    });
  }

  async delete(id: string) {
    return await this.prisma.diaSemana.delete({
      where: { id },
    });
  }
}
