import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //return 'Hello Word - Default Root Service/Controller...';
    return String(process.env.DATABASE_URL);
  }
}
