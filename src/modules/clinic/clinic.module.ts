import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { ClinicController } from './controller/clinic-controller';
import { ClinicService } from './service/clinic.service';
import ClinicRepository from './repository/clinic-repository';

@Module({
  controllers: [ClinicController],
  providers: [ClinicService, PrismaService, ClinicRepository],
  exports: [ClinicService],
})
export class ClinicModule {}
