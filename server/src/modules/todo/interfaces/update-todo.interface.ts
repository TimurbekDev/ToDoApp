import { IToDo } from "./todo.interface";

export declare interface IUpdateToDoRequest extends Omit<IToDo,'userId'> {}