import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PatientModule } from '../patient/patient.module';
import { MedicalModule } from '../medical/medical.module';
import { AdressModule } from '../adress/adress.module';
import { ClinicModule } from '../clinic/clinic.module';
import { DayModule } from '../day_week/day.module';
import { DisponibilityModule } from '../disponibility/disponibility.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PatientModule,
    MedicalModule,
    AdressModule,
    ClinicModule,
    DayModule,
    DisponibilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
