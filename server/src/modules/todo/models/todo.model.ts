import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IToDo } from "../interfaces";
import { User } from "@modules";

@Table({
    tableName : 'todos'
})
export class Todo extends Model implements IToDo{
    @Column({
        type : DataType.INTEGER,
        primaryKey : true,
        autoIncrement : true
    })
    id: number;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    text: string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    from: string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    to: string;

    @Column({
        type : DataType.BOOLEAN,
        defaultValue: false,
        allowNull : false
    })
    isCompleted: boolean;

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER,
        allowNull : false
    })
    userId: number;
}