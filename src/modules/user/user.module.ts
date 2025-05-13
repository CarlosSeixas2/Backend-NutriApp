import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user-controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import UserRepository from './repository/user-repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Antedigmon',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
