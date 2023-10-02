import { Module } from '@nestjs/common';

import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
