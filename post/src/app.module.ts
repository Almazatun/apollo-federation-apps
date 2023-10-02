import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), PostModule, PrismaModule, TrpcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
