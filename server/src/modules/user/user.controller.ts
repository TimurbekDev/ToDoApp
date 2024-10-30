import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CheckAuthGuard } from '@guards';
import { Protected } from '@decorators';

@ApiTags('User')
@ApiBearerAuth('acess-token')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Protected(true)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Protected(true)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Protected(true)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Protected(true)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update({
      ...updateUserDto,
      id
    });
  }

  @Protected(true)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
