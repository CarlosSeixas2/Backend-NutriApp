import { BadRequestException, Injectable } from '@nestjs/common';
import DisponibilityRepository from '../repository/disponibility-repository';
import { CreateDisponibilityDto } from '../dto/create-disponibility.dto';
import { UpdateDisponibilityDto } from '../dto/update-disponibility.dto';
import ClinicRepository from '../../clinic/repository/clinic-repository';
import MedicalRepository from '../../medical/repository/medical-repository';
import toTimeOnlyDate from 'src/utils/toTimeOnlyDate';

@Injectable()
export default class DisponibilityService {
  constructor(
    private readonly disponibilityRepository: DisponibilityRepository,
    private readonly clinicRepository: ClinicRepository,
    private readonly medicalRepository: MedicalRepository,
  ) {}

  async findAll() {
    return this.disponibilityRepository.findAll();
  }

  async findById(id: string) {
    return this.disponibilityRepository.findById(id);
  }

  async create(data: CreateDisponibilityDto) {
    const { horaInicio, horaFim, profissionalId, clinicaId, diaSemanaId } =
      data;

    if (
      !horaInicio ||
      !horaFim ||
      !profissionalId ||
      !clinicaId ||
      !diaSemanaId
    ) {
      throw new BadRequestException('Todos os campos são obrigatórios.');
    }

    const horaInicioDate = toTimeOnlyDate(horaInicio);
    const horaFimDate = toTimeOnlyDate(horaFim);

    const clinic = await this.clinicRepository.findById(clinicaId);
    if (!clinic) {
      throw new BadRequestException('Clínica não encontrada.');
    }

    const medical = await this.medicalRepository.findById(profissionalId);
    if (!medical) {
      throw new BadRequestException('Profissional não encontrado.');
    }

    if (horaInicioDate >= horaFimDate) {
      throw new BadRequestException(
        'Hora de início deve ser anterior à hora de fim.',
      );
    }

    const conflictTimes = await this.disponibilityRepository.findConflict(
      profissionalId,
      clinicaId,
      diaSemanaId,
      horaInicioDate,
      horaFimDate,
    );

    if (conflictTimes) {
      throw new BadRequestException(
        'Já existe uma disponibilidade cadastrada nesse horário.',
      );
    }

    return this.disponibilityRepository.create({
      ...data,
      horaInicio: horaInicioDate.toISOString(),
      horaFim: horaFimDate.toISOString(),
    });
  }

  async update(id: string, data: UpdateDisponibilityDto) {
    const disponibility = await this.disponibilityRepository.findById(id);

    if (!disponibility) {
      throw new Error('Disponibilidade não encontrada');
    }

    return this.disponibilityRepository.update(id, data);
  }

  async delete(id: string) {
    const disponibility = await this.disponibilityRepository.findById(id);

    if (!disponibility) {
      throw new Error('Disponibilidade não encontrada');
    }

    return this.disponibilityRepository.delete(id);
  }
}
