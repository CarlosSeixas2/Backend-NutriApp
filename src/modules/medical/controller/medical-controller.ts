import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MedicalService } from '../service/medical.service';
import { CreateMedicalDto } from '../dto/create-medical';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medico')
@Controller('medicals')
export class MedicalController {
  constructor(private readonly medicalService: MedicalService) {}

  @Post()
  register(@Body() dto: CreateMedicalDto) {
    return this.medicalService.register(dto);
  }

  @Get()
  listAll() {
    return this.medicalService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.medicalService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateMedicalDto) {
    return this.medicalService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.medicalService.delete(id);
  }
}
