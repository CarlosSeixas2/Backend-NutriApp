import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AdressController } from './controller/adress-controller';
import { AdressService } from './service/adress.service';
import AdressRepository from './repository/adress-repository';

@Module({
  controllers: [AdressController],
  providers: [AdressService, PrismaService, AdressRepository],
  exports: [AdressService],
})
export class AdressModule {}
