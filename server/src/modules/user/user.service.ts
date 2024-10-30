import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models';
import { ICreateUserRequest, IUpdateUserRequest } from './interfaces';
import { hash } from 'bcrypt';
import { Todo } from '../todo';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel : typeof User
  ){}

  async create(createUserDto: ICreateUserRequest){

    const user = await this.findOneByEmail(createUserDto.email)

    if(user)
      throw new BadRequestException('User already exist')

    const hashedPass = await  hash(createUserDto.password, 10)
    createUserDto.password = hashedPass

    const userCreated = await this.userModel.create(createUserDto)

    return await this.findOne(userCreated.id)
  }

  async findAll() {
    return this.userModel.findAll({
      attributes : {
        exclude : ['password','createdAt','updatedAt']
      }
    });
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id,{
      attributes : {
        exclude : ['password','createdAt','updatedAt']
      },
    })

    if(!user)
      throw new NotFoundException('User not found')

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({
      where : {  email },
      attributes : {
        exclude : ['createdAt','updatedAt']
      }
    })

    return user;
  }

  async update(updateUserDto: IUpdateUserRequest) {
    const user = await this.findOne(updateUserDto.id)

    const updatedUser = await user.update({
      full_name : updateUserDto.full_name,
      password : updateUserDto.password
    })

    return updatedUser;
  }

  async remove(id: number) {
    return (await this.findOne(id)).destroy();
  }
}
