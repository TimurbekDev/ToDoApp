import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models';
import { CheckAuthGuard } from '@guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports : [SequelizeModule.forFeature([User])],
  exports : [UserService]
})
export class UserModule {}
