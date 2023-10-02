import { Module } from '@nestjs/common';

import { TrpcService } from './trpc.service';

@Module({
  controllers: [],
  providers: [TrpcService],
  exports: [TrpcService],
})
export class TrpcModule {}
