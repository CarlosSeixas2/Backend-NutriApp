import { Injectable, NotFoundException } from '@nestjs/common';
import DayRepository from '../repository/day-repository';
import { CreateDayDto } from '../dto/create-day.dto';
import { UpdateDayDto } from '../dto/update-day.dto';

@Injectable()
export class DayService {
  constructor(private readonly dayRepository: DayRepository) {}

  async listAll() {
    return await this.dayRepository.findAll();
  }

  async findById(id: string) {
    return await this.dayRepository.findById(id);
  }

  async create(dto: CreateDayDto) {
    return await this.dayRepository.create(dto);
  }

  async update(id: string, dto: UpdateDayDto) {
    const day = await this.dayRepository.findById(id);

    if (!day) {
      throw new NotFoundException('Id do Dia não encontrado');
    }

    await this.dayRepository.update(id, dto);
    return;
  }

  async delete(id: string) {
    const day = await this.dayRepository.findById(id);

    if (!day) {
      throw new NotFoundException('Id do Dia não encontrado');
    }

    await this.dayRepository.delete(id);
    return;
  }
}
