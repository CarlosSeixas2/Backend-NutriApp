import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DayService } from '../service/day.service';
import { CreateDayDto } from '../dto/create-day.dto';
import { UpdateDayDto } from '../dto/update-day.dto';

@ApiTags('Dia da Semana')
@Controller('day-week')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  @Get()
  async listAll() {
    return await this.dayService.listAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.dayService.findById(id);
  }

  @Post()
  async register(@Body() dto: CreateDayDto) {
    return await this.dayService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDayDto) {
    return await this.dayService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.dayService.delete(id);
  }
}
