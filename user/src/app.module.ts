import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UserModule, TrpcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
