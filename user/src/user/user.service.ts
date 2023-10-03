import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserRepo } from './user.repo';
import { CreateUserInput } from './input/create-user.input';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepo) {}

  public async get(id: string): Promise<User> {
    const userDB = await this.userRepository.get({ id });

    if (!userDB) {
      throw new BadRequestException('User already exists');
    }

    return userDB;
  }

  public async create(createUserInput: CreateUserInput): Promise<User> {
    const userDB = await this.userRepository.getByEmail({
      email: createUserInput.email,
    });

    if (userDB) {
      throw new BadRequestException('User already exists');
    }

    return this.userRepository.save({ ...createUserInput });
  }
}
