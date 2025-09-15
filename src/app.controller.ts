import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('cats')
@ApiTags('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // /cats/1
  @Get(':id')
  getCat(@Param('id') id: string) {
    return this.appService.getHello();
  }

  // /cats/1/toto
  @Get(':id/toto')
  getHello(@Param('id') id: string) {
    return this.appService.getHello();
  }
}
