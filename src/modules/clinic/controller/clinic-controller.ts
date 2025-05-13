import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClinicService } from '../service/clinic.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClinicaDto } from '../dto/create-clinic.dto';
import { UpdateClinicaDto } from '../dto/update-clinic.dto';

@ApiTags('Clinica')
@Controller('clinics')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get()
  listAll() {
    return this.clinicService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clinicService.findById(id);
  }

  @Post('')
  register(@Body() dto: CreateClinicaDto) {
    return this.clinicService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClinicaDto) {
    return this.clinicService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
