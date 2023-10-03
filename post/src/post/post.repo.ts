import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostRepo {
  constructor(private prisma: PrismaService) {}

  public list(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  public listByUserId(whereInput: Prisma.PostWhereInput): Promise<Post[]> {
    return this.prisma.post.findMany({ where: whereInput });
  }

  public get(getPostInput: Prisma.PostWhereUniqueInput): Promise<null | Post> {
    return this.prisma.post.findUnique({ where: getPostInput });
  }

  public getByTitle(getPostInput: Prisma.PostWhereInput): Promise<null | Post> {
    return this.prisma.post.findFirst({ where: getPostInput });
  }

  public save(createPostInput: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data: createPostInput });
  }
}
