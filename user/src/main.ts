import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import { configs } from './configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  await app.listen(configs.base.port);
  console.log(`App running on ${configs.base.port}`);
}

bootstrap();
