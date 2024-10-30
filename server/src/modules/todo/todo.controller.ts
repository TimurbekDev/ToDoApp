import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Protected } from '@decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('ToDo')
@ApiBearerAuth('acess-token')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Protected(true)
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }

  @Protected(true)
  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Protected(true)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.todoService.findOne(id);
  }

  @Protected(true)
  @Get('users/:userId')
  async findAllByUserId(@Param('userId') userId: number){
    return await this.todoService.findAllByUserId(userId)
  }

  @Protected(true)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update({
      ...updateTodoDto,
      id
    });
  }

  @Protected(true)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
