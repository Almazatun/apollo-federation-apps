import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configs } from './configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(configs.base.port);
  console.log(`App running on ${configs.base.port}`);
}

bootstrap();
