import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PatientService } from '../service/patient.service';
import CreatePatientDto from '../dto/create-patient';
import { ApiTags } from '@nestjs/swagger';
import UpdatePatientDto from '../dto/update-patient';

@ApiTags('Paciente')
@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  listAll() {
    return this.patientService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.patientService.findById(id);
  }

  @Post()
  register(@Body() dto: CreatePatientDto) {
    return this.patientService.register(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePatientDto) {
    return this.patientService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.patientService.delete(id);
  }
}
