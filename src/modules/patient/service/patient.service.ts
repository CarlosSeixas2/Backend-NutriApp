import { ConflictException, Injectable } from '@nestjs/common';
import PatientRepository from '../repository/patient-repository';
import CreatePatientDto from '../dto/create-patient';
import UpdatePatientDto from '../dto/update-patient';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  async listAll() {
    return await this.patientRepository.listAll();
  }

  async findById(id: string) {
    return await this.patientRepository.findById(id);
  }

  async delete(id: string) {
    const patientExists = await this.patientRepository.findById(id);

    if (!patientExists) {
      throw new ConflictException('Patient not found');
    }

    return await this.patientRepository.delete(id);
  }

  async update(id: string, data: UpdatePatientDto) {
    const patientExists = await this.patientRepository.findById(id);

    if (!patientExists) {
      throw new ConflictException('Patient not found');
    }

    return await this.patientRepository.update(id, data);
  }

  async register(data: CreatePatientDto) {
    return await this.patientRepository.create(data);
  }
}
