import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IUpdateUserRequest } from "../interfaces";

export class UpdateUserDto implements Omit<IUpdateUserRequest,'id'> {

    @ApiProperty({
        description: 'User name',
        example: 'John Doe'
    })
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({
        description : 'User password',
        example : 'timurbek123@'
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
