import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Post()
  create(@Body() CreateUser: CreateUserDto): Promise<User> {
    return this.UsersService.create(CreateUser);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.UsersService.delete(id);
  }

  @Put(':id')
  update(@Body() UpdateUser: CreateUserDto, @Param('id') id): Promise<User> {
    return this.UsersService.update(UpdateUser, id);
  }
}
