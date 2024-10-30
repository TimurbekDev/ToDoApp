import { IUser } from "./user.interface";

export declare interface ICreateUserRequest extends Omit<IUser, 'id'> { }