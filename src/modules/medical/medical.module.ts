import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { MedicalController } from './controller/medical-controller';
import MedicalRepository from './repository/medical-repository';
import { MedicalService } from './service/medical.service';
import DisponibilityRepository from '../disponibility/repository/disponibility-repository';

@Module({
  controllers: [MedicalController],
  providers: [
    MedicalService,
    PrismaService,
    MedicalRepository,
    DisponibilityRepository,
  ],
  exports: [MedicalService],
})
export class MedicalModule {}
