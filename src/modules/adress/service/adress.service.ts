import { Injectable } from '@nestjs/common';
import adressRepository from '../repository/adress-repository';
import { CreateAdressDto } from '../dto/create-adress.dto';
import { UpdateAdressDto } from '../dto/update-adress.dto';

@Injectable()
export class AdressService {
  constructor(private readonly adressRepository: adressRepository) {}

  async listAll() {
    return await this.adressRepository.listAll();
  }

  async findById(id: string) {
    return await this.adressRepository.findById(id);
  }

  async findByCep(cep: string) {
    return await this.adressRepository.findByCep(cep);
  }

  async create(data: CreateAdressDto) {
    return await this.adressRepository.create(data);
  }

  async update(id: string, data: UpdateAdressDto) {
    const adress = await this.adressRepository.findById(id);

    if (!adress) {
      throw new Error('Adress not found');
    }

    await this.adressRepository.update(id, data);
    return;
  }

  async delete(id: string) {
    const adress = await this.adressRepository.findById(id);

    if (!adress) {
      throw new Error('Adress not found');
    }

    await this.adressRepository.delete(id);
    return;
  }
}
