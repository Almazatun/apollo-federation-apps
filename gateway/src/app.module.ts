import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {},
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://localhost:3002/graphql' },
            { name: 'posts', url: 'http://localhost:3001/graphql' },
          ],
        }),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
