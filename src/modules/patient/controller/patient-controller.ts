import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientService } from '../service/patient.service';
import CreatePatientDto from '../dto/create-patient';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Paciente')
@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  register(@Body() dto: CreatePatientDto) {
    return this.patientService.register(dto);
  }

  @Get()
  listAll() {
    return this.patientService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.patientService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePatientDto) {
    return this.patientService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.patientService.delete(id);
  }
}
