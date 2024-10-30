import { INestApplication } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

export const swaggerConfig = (app:INestApplication<any>)=>SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
    .setTitle('Todo Server')
    .setDescription('The Todo Api helps you to manage your todo list')
    .setVersion('1.0')
    .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
    },'acess-token')
    .build()
)