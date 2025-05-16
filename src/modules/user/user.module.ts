import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user-controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import UserRepository from './repository/user-repository';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository, JwtStrategy],
  exports: [UserService, JwtModule],
})
export class UserModule {}
