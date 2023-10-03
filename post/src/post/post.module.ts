import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostRepo } from './post.repo';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TrpcModule } from 'src/trpc/trpc.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    TrpcModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
    PrismaModule,
  ],
  providers: [PostResolver, UserResolver, PostService, PostRepo],
  exports: [],
})
export class PostModule {}
