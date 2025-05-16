import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MedicalService } from '../service/medical.service';
import { CreateMedicalDto } from '../dto/create-medical';
import { ApiTags } from '@nestjs/swagger';
import { UpdateMedicalDto } from '../dto/update-medical';

@ApiTags('Medico')
@Controller('medicals')
export class MedicalController {
  constructor(private readonly medicalService: MedicalService) {}

  @Get()
  listAll() {
    return this.medicalService.listAll();
  }

  @Get('/disponibility/:professionalid')
  checkDisponibility(@Param('professionalid') professionalId: string) {
    return this.medicalService.disponobilityMedical(professionalId);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.medicalService.findById(id);
  }

  @Post()
  register(@Body() dto: CreateMedicalDto) {
    return this.medicalService.register(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedicalDto) {
    return this.medicalService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.medicalService.delete(id);
  }
}
