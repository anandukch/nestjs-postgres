import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserI } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() user: UserI) {
    return this.userService.add(user);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
}
