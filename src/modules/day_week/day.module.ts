import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { DayController } from './controller/day-controller';
import { DayService } from './service/day.service';
import DayRepository from './repository/day-repository';

@Module({
  controllers: [DayController],
  providers: [DayService, PrismaService, DayRepository],
  exports: [DayService],
})
export class DayModule {}
