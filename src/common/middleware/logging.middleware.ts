import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');

    //calculate time it takes to finish
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`Request took ${duration}ms`);
    });
    next();
  }
}
