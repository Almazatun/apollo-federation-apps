import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveReference,
} from '@nestjs/graphql';
import { User } from '@prisma/client';

import { UserService } from './user.service';
import { UserRepo } from './user.repo';
import { CreateUserInput } from './input/create-user.input';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
    private userRepository: UserRepo,
  ) {}

  @Query('listUser')
  async listUser(): Promise<User[]> {
    return this.userRepository.list();
  }

  @Query('getUser')
  async getUser(@Args('id') id: string): Promise<User> {
    return this.userService.get(id);
  }

  @Mutation('createUser')
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userRepository.get({ id: reference.id });
  }
}
