import { Injectable } from '@nestjs/common';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { configs } from 'src/configuration';

@Injectable()
export class TrpcService {
  public client;

  constructor() {
    this.client = createTRPCProxyClient({
      links: [
        httpBatchLink({
          url: configs.trpc.user,
        }),
      ],
    });
  }
}
