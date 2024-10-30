import { BadRequestException, Injectable } from '@nestjs/common';
import { ICreateToDoRequest, IUpdateToDoRequest } from './interfaces';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './models';


@Injectable()
export class TodoService {

  constructor(
    @InjectModel(Todo) private todoModel : typeof Todo
  ){}

  async create(payload: ICreateToDoRequest) {
    const todo = await this.todoModel.create(payload)
    return await this.findOne(todo.id);
  }

  async findAll() {
    return await this.todoModel.findAll();
  }

  async findAllByUserId(userId:number){
    return await this.todoModel.findAll({
      where : { userId },
      attributes : {
        exclude : ['updatedAt']
      }
    })
  }

  async findOne(id: number) {
    const todo = await this.todoModel.findByPk(id,{
      attributes : {
        exclude : ['updatedAt']
      }
    })

    if(!todo)
      throw new BadRequestException('Todo not found')

    return todo;
  }

  async update(payload:IUpdateToDoRequest) {
    const todo = await this.findOne(payload.id)

    const updatedTodo = await todo.update({
      text : payload.text,
      from : payload.from,
      to : payload.to,
      isCompleted : payload.isCompleted
    })
    return updatedTodo;
  }

  async remove(id: number) {
    return (await this.findOne(id)).destroy();
  }
}
