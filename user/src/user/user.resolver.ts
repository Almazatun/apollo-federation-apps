import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from '@prisma/client';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserDto,
  ): Promise<User> {
    return this.createUser(createUserInput);
  }

  @Query()
  async getUser(@Args('id') id: string): Promise<User> {
    return this.getUser(id);
  }
}
