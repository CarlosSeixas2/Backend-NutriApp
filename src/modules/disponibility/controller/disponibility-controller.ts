import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import DisponibilityService from '../service/disponibility.service';
import { UpdateDisponibilityDto } from '../dto/update-disponibility.dto';
import { CreateDisponibilityDto } from '../dto/create-disponibility.dto';

@ApiTags('Disponibilidade')
@Controller('disponibility')
export class DisponibilityController {
  constructor(private readonly disponibilityService: DisponibilityService) {}

  @Get()
  async findAll() {
    return this.disponibilityService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.disponibilityService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateDisponibilityDto) {
    return this.disponibilityService.update(id, data);
  }

  @Post()
  async create(@Body() data: CreateDisponibilityDto) {
    return this.disponibilityService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.disponibilityService.delete(id);
  }
}
