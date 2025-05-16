import * as dayjs from 'dayjs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Disponibilidade } from 'generated/prisma';
import { CreateDisponibilityDto } from '../dto/create-disponibility.dto';
import { UpdateDisponibilityDto } from '../dto/update-disponibility.dto';

export abstract class DisponibilityInterfaceClass {
  abstract findAll(): Promise<Disponibilidade[]>;
  abstract findById(id: string): Promise<Disponibilidade | null>;
  abstract create(data: CreateDisponibilityDto): Promise<Disponibilidade>;
  abstract update(id: string, data: UpdateDisponibilityDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export default class DisponibilityRepository
  implements DisponibilityInterfaceClass
{
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.disponibilidade.findMany();
  }

  async findById(id: string) {
    return this.prisma.disponibilidade.findUnique({
      where: { id },
    });
  }

  async create(data: CreateDisponibilityDto) {
    return this.prisma.disponibilidade.create({ data });
  }

  async update(id: string, data: UpdateDisponibilityDto) {
    await this.prisma.disponibilidade.update({
      where: { id },
      data,
    });
    return;
  }

  async delete(id: string) {
    await this.prisma.disponibilidade.delete({
      where: { id },
    });
    return;
  }

  async findConflict(
    profissionalId: string,
    clinicaId: string,
    diaSemanaId: string,
    horaInicio: Date,
    horaFim: Date,
  ) {
    return this.prisma.disponibilidade.findFirst({
      where: {
        profissionalId,
        clinicaId,
        diaSemanaId,
        OR: [
          // Verifica se o novo horário começa durante um existente
          {
            AND: [
              { horaInicio: { lte: horaInicio } },
              { horaFim: { gt: horaInicio } },
            ],
          },
          // Verifica se o novo horário termina durante um existente
          {
            AND: [
              { horaInicio: { lt: horaFim } },
              { horaFim: { gte: horaFim } },
            ],
          },
          // Verifica se o novo horário engloba um existente
          {
            AND: [
              { horaInicio: { gte: horaInicio } },
              { horaFim: { lte: horaFim } },
            ],
          },
          // Verifica se o novo horário está completamente contido em um existente
          {
            AND: [
              { horaInicio: { lte: horaInicio } },
              { horaFim: { gte: horaFim } },
            ],
          },
        ],
      },
    });
  }

  async disponibilityMedical(profissionalId: string) {
    const disponibilidades = await this.prisma.disponibilidade.findMany({
      where: {
        profissionalId,
      },
      include: {
        clinica: true,
        diaSemana: true,
        profissional: {
          include: { usuarios: true },
        },
      },
    });

    // Agrupar por dia da semana
    type GroupedDisponibilities = {
      [diaSemana: string]: {
        profissional: string;
        disponibilidades: Array<{
          clinica: string;
          horario: {
            horaInicio: string;
            horaFim: string;
          };
        }>;
      };
    };

    const groupedDisponibilities =
      disponibilidades.reduce<GroupedDisponibilities>((acc, item) => {
        const diaSemana = item.diaSemana.dia;
        const profissionalNome = item.profissional.usuarios[0].nome;

        // Se o dia da semana ainda não foi adicionado ao acumulador, inicializa-o
        if (!acc[diaSemana]) {
          acc[diaSemana] = {
            profissional: profissionalNome,
            disponibilidades: [],
          };
        }

        // Adiciona a disponibilidade ao grupo correspondente, sem repetir o nome do profissional
        acc[diaSemana].disponibilidades.push({
          clinica: item.clinica.nomeFantasia,
          horario: {
            horaInicio: dayjs(item.horaInicio).format('HH:mm'),
            horaFim: dayjs(item.horaFim).format('HH:mm'),
          },
        });

        return acc;
      }, {});

    // Transformar o objeto agrupado em um array para resposta
    const result = Object.keys(groupedDisponibilities).map((dia) => ({
      diaSemana: dia,
      profissional: groupedDisponibilities[dia].profissional,
      disponibilidades: groupedDisponibilities[dia].disponibilidades,
    }));

    return result;
  }
}
