import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get('create')
    @Render('users/create-user.html')
    createForm(){
    }


    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto);
      }

    @Get() // @get and @post are the http request methods that can be used in html form
    findAll() {
      return this.usersService.findAll();
      }

    @Get(':id') //(:id) means that it is a representative variable ...whenever you do /'something' that is not slash create it will take you to this @Get':id' 
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto:
    UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')// this is the http verb or http request method
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
      }

    }