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
import { AdressService } from '../service/adress.service';
import { CreateAdressDto } from '../dto/create-adress.dto';
import { UpdateAdressDto } from '../dto/update-adress.dto';

@ApiTags('Endereco')
@Controller('adresses')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Get()
  listAll() {
    return this.adressService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.adressService.findById(id);
  }

  @Get('cep/:cep')
  findByCep(@Param('cep') cep: string) {
    return this.adressService.findByCep(cep);
  }

  @Post('')
  register(@Body() dto: CreateAdressDto) {
    return this.adressService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAdressDto) {
    return this.adressService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.adressService.delete(id);
  }
}
