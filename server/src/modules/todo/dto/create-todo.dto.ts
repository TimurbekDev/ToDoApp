import { ApiProperty } from "@nestjs/swagger";
import { ICreateToDoRequest } from "../interfaces";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto implements ICreateToDoRequest {

    @ApiProperty({
        description: 'The title of the todo',
        example: 'Drink water'
    })
    @IsNotEmpty()
    @IsString()
    text: string;

    @ApiProperty({
        description: 'From ',
        example: '10.24.2003'
    })
    @IsNotEmpty()
    @IsString()
    from: string;

    @ApiProperty({
        description: 'To ',
        example: '10.24.2003'
    })
    @IsNotEmpty()
    @IsString()
    to: string;

    @ApiProperty({
        description: 'Is Completed ',
        example: false
    })
    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;

    @ApiProperty({
        description: 'User I ',
        example: 1
    })
    @IsNotEmpty()
    @IsBoolean()
    userId: number;
}
