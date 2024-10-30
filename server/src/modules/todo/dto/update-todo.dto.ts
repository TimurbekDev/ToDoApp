import { ApiProperty } from "@nestjs/swagger";
import { IUpdateToDoRequest } from "../interfaces";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateTodoDto implements Omit<IUpdateToDoRequest,'id'> {

    @ApiProperty({
        description: 'The title of the todo',
        example: 'Drink water'
    })
    @IsString()
    text: string;

    @ApiProperty({
        description: 'From ',
        example: '10.24.2003'
    })
    @IsString()
    from: string;

    @ApiProperty({
        description: 'To ',
        example: '10.24.2003'
    })
    @IsString()
    to: string;

    @ApiProperty({
        description: 'Is Completed ',
        example: false
    })
    @IsBoolean()
    isCompleted: boolean;
}
