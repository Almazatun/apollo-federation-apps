import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { User } from '../common/user';
import { PostRepo } from './post.repo';

@Resolver('User')
export class UserResolver {
  constructor(private postRepository: PostRepo) {}

  @ResolveField('posts')
  public posts(@Parent() user: User) {
    console.log('Post_UserResolveField');
    return this.postRepository.listByUserId({ user_id: user.id });
  }
}
