import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Post } from '@prisma/client';

import { CreatePostInput } from './input/create-post.input';
import { PostRepo } from './post.repo';
import { TrpcService } from 'src/trpc/trpc.service';

@Injectable()
export class PostService {
  constructor(private trpc: TrpcService, private postRepository: PostRepo) {}

  public async list(): Promise<Post[]> {
    return this.postRepository.list();
  }

  public async get(id: string): Promise<Post> {
    const postDB = await this.postRepository.get({ id });

    if (!postDB) {
      throw new NotFoundException('Post not found');
    }

    return postDB;
  }

  public async create(createPostInput: CreatePostInput): Promise<Post> {
    try {
      await this.trpc.client.getUser.query({
        id: createPostInput.userId,
      });
    } catch (err) {
      throw new BadRequestException(err.shape.message);
    }

    const postDB = await this.postRepository.getByTitle({
      title: createPostInput.title,
      user_id: createPostInput.userId,
    });

    if (postDB) {
      throw new BadRequestException(
        `Post already exists by title ${createPostInput.title}`,
      );
    }

    return this.postRepository.save({
      title: createPostInput.title,
      user_id: createPostInput.userId,
    });
  }
}
