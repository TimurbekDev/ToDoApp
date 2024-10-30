import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { IUser } from "../interfaces";
import { Todo } from "@modules";

@Table({
    tableName: "users",
})
export class User extends Model implements IUser{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    full_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    password: string;

    @HasMany(()=>Todo)
    todos : Todo[]
}