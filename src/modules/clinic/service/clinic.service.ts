import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import ClinicRepository from '../repository/clinic-repository';
import { CreateClinicaDto } from '../dto/create-clinic.dto';
import { UpdateClinicaDto } from '../dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(private readonly clinicRepository: ClinicRepository) {}

  async listAll() {
    return await this.clinicRepository.listAll();
  }

  async findById(id: string) {
    return await this.clinicRepository.findById(id);
  }

  async create(data: CreateClinicaDto) {
    const existingClinic = await this.clinicRepository.findByCnpj(data.cnpj);

    if (existingClinic) {
      throw new ConflictException('CNPJ já cadastrado');
    }

    return await this.clinicRepository.create(data);
  }

  async update(id: string, data: UpdateClinicaDto) {
    const clinic = await this.clinicRepository.findById(id);
    if (!clinic) {
      throw new NotFoundException('Id da clínica não encontrado');
    }
    await this.clinicRepository.update(id, data);
    return;
  }

  async delete(id: string) {
    const clinic = await this.clinicRepository.findById(id);
    if (!clinic) {
      throw new NotFoundException('Id da clínica não encontrado');
    }
    await this.clinicRepository.delete(id);
    return;
  }
}
