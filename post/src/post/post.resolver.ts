import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Post } from '@prisma/client';

import { PostService } from './post.service';
import { CreatePostInput } from './input/create-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query('listPost')
  public async listPost(): Promise<Post[]> {
    return this.postService.list();
  }

  @Query('getPost')
  public async getPost(@Args('id') id: string): Promise<Post> {
    return this.postService.get(id);
  }

  @Mutation('createPost')
  public async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.create(createPostInput);
  }

  @ResolveField('user')
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.user_id };
  }
}
