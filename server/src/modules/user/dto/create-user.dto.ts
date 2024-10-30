import { ApiProperty } from "@nestjs/swagger";
import { ICreateUserRequest } from "../interfaces";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto implements ICreateUserRequest {

    @ApiProperty({
        description: 'User name',
        example: 'John Doe'
    })
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({
        description : 'User email',
        example : 'timurbekbeksaburov@gmail.com'
    })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({
        description : 'User password',
        example : 'timurbek123@'
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
