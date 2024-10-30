import { IToDo } from "./todo.interface";

export declare interface ICreateToDoRequest extends Omit<IToDo,'id'>{}