import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserI } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async add(user: UserI) {
    try {
      return await this.userRepository.save(user)
    } catch (error) {
      return {
        message:error
      }
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }
}
