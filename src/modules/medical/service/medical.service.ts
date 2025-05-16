import { ConflictException, Injectable } from '@nestjs/common';
import MedicalRepository from '../repository/medical-repository';
import { UpdateMedicalDto } from '../dto/update-medical';
import { CreateMedicalDto } from '../dto/create-medical';
import DisponibilityRepository from 'src/modules/disponibility/repository/disponibility-repository';

@Injectable()
export class MedicalService {
  constructor(
    private readonly medicalRepository: MedicalRepository,
    private readonly disponibilityRepository: DisponibilityRepository,
  ) {}

  async listAll() {
    return await this.medicalRepository.listAll();
  }

  async findById(id: string) {
    return await this.medicalRepository.findById(id);
  }

  async delete(id: string) {
    const medicalExists = await this.medicalRepository.findById(id);

    if (!medicalExists) {
      throw new ConflictException('Medical professional not found');
    }

    return await this.medicalRepository.delete(id);
  }

  async update(id: string, data: UpdateMedicalDto) {
    const medicalExists = await this.medicalRepository.findById(id);

    if (!medicalExists) {
      throw new ConflictException('Medical professional not found');
    }

    return await this.medicalRepository.update(id, data);
  }

  async register(data: CreateMedicalDto) {
    return await this.medicalRepository.create(data);
  }

  async disponobilityMedical(professionalId: string) {
    const result =
      await this.disponibilityRepository.disponibilityMedical(professionalId);

    return result;
  }
}
