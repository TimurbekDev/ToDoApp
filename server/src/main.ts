import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@config';
import { ExceptionHandlerFilter } from './filter/all-exception.filter';

async function startToDo() {
  const app = await NestFactory.create(AppModule,{
    cors: true,
    logger : false
  });

  const config = app.get(ConfigService)

  SwaggerModule.setup('api',app,swaggerConfig(app))

  app.useGlobalFilters(new ExceptionHandlerFilter())

  await app.listen(
    config.get<number>('app.port'),
    config.get<string>('app.host'),
    ()=>{
      console.log(`Server is running on 
        http://${config.get<string>('app.host')}:${config.get<number>('app.port')}/api`)
    }
  );
}
startToDo();
