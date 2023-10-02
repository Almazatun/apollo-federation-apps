import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserRepo } from './user.repo';
import { CreateUserDto } from './dto/create_user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepo) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const userDB = await this.userRepository.getByUsername({
      username: createUserDto.username,
    });

    if (userDB) {
      throw new BadRequestException('User already exists');
    }

    return this.userRepository.save({ ...createUserDto });
  }

  public async get(id: string): Promise<User> {
    const userDB = await this.userRepository.get({ id });

    if (!userDB) {
      throw new BadRequestException('User already exists');
    }

    return userDB;
  }
}
