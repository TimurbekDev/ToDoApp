import { IUser } from "./user.interface";

export declare interface IUpdateUserRequest extends Omit<IUser,'email'> {}