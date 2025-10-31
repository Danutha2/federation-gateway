import { Module } from '@nestjs/common';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [ GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          
          subgraphs: [
            { name: 'Vehicle', url: 'http://localhost:3001/graphql' },
            { name: 'Records', url: 'http://localhost:3007/graphql' },
          ],
        }),
      },
    }),],
  controllers: [],
  providers: [],
})

export class AppModule {}
