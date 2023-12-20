import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './core/middleware/logger';
import { UsersController } from './users/users.controller';
import { AuthMiddleware } from './core/middleware/auth';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController)
      .apply(AuthMiddleware)
      .forRoutes(UsersController);
    // consumer.apply(LoggerMiddleware).forRoutes('user');
    // .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
