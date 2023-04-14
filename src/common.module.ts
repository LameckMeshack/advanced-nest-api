import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './common/middleware/logging.middleware';

@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
