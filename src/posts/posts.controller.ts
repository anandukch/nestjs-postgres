import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { PostEntity } from 'src/models/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  @Post()
  async add(@Body() post) {
    return await this.postsService.add(post);
  }

  @Get()
  async getAll() {
    return await this.postsService.getAll();
  }

  @Put()
  async edit(@Body() post) {
    return await this.postsService.edit(post);
  }
}
