import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PatientService } from './service/patient.service';
import PatientRepository from './repository/patient-repository';
import { PatientController } from './controller/patient-controller';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PrismaService, PatientRepository],
  exports: [PatientService],
})
export class PatientModule {}
