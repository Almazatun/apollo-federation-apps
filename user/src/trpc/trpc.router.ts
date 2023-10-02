import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

import { TrpcService } from './trpc.service';
import { UserRepo } from 'src/user/user.repo';

@Injectable()
export class TrpcRouter {
  public appRouter;

  constructor(private trpc: TrpcService, private userRepository: UserRepo) {
    this.appRouter = this.trpc.router({
      getUser: this.trpc.procedure
        .input(
          z.object({
            id: z.string(),
          }),
        )
        .query(async ({ input }) => {
          const { id } = input;
          const userDB = await this.userRepository.get({ id });

          if (!userDB)
            throw new TRPCError({
              code: 'NOT_FOUND',
              message: `Invalid user id: ${id}`,
            });

          return userDB;
        }),
    });
  }

  public async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}
