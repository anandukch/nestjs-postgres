import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/models/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async add(post) {
    console.log(post);
    try {
      const posts=await this.postRepository.save(post)
      
      
      return posts
    } catch (error) {
      return {
        message:error
      }
    }
  }

  async getAll() {
    return await this.postRepository.find();
  }

  async edit(post, postId: number=1) {
    try {
      const posts=await this.postRepository.update(postId,post)
      return posts
    } catch (error) {
      return {
        message:error
      }
    }
  }
}
