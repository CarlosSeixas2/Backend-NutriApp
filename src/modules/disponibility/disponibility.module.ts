import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { DisponibilityController } from './controller/disponibility-controller';
import DisponibilityService from './service/disponibility.service';
import DisponibilityRepository from './repository/disponibility-repository';
import ClinicRepository from '../clinic/repository/clinic-repository';
import MedicalRepository from '../medical/repository/medical-repository';

@Module({
  controllers: [DisponibilityController],
  providers: [
    DisponibilityService,
    PrismaService,
    DisponibilityRepository,
    ClinicRepository,
    MedicalRepository,
  ],
  exports: [DisponibilityService],
})
export class DisponibilityModule {}
