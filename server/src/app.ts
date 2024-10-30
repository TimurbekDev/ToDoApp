import { appConfig, dbConfig, jwtConfig, strategyConfig } from '@config';
import { CheckAuthGuard } from '@guards';
import { AuthModule, JwtCustomModule, TodoModule, UserModule } from '@modules';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load : [appConfig,dbConfig,jwtConfig,strategyConfig]
    }),
    SequelizeModule.forRootAsync({
      imports : [ConfigModule],
      inject : [ConfigService],
      useFactory : (config:ConfigService)=>({
        dialect : 'postgres',
        port : config.get<number>('db.port'),
        host : config.get<string>('db.host'),
        username : config.get<string>('db.user'),
        password : config.get<string>('db.pass'),
        database : config.get<string>('db.name'),
        autoLoadModels : true,
        synchronize : true,
        logging : false
      })
    }),
    UserModule,
    JwtCustomModule,
    AuthModule,
    TodoModule
  ],
  providers : [
    {
      useClass : CheckAuthGuard,
      provide : APP_GUARD
    }
  ]
})
export class AppModule {}
