import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Post } from '@prisma/client';

import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private postService: PostService) {}

  @Mutation('createPost')
  public async create(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.create(createPostInput);
  }

  @Query('posts')
  public async findAll(): Promise<Post[]> {
    return this.postService.list();
  }

  @Query('post')
  public async findOne(@Args('id') id: string): Promise<Post> {
    return this.postService.get(id);
  }

  // @Mutation('updatePost')
  // update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
  // return this.postService.update(updatePostInput.id, updatePostInput);
  // }

  // @Mutation('removePost')
  // remove(@Args('id') id: number) {
  // return this.postService.remove(id);
  // }
}
