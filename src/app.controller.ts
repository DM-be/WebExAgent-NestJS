import { Controller, Get, Post, Body, Redirect,  Res, Render} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello !' };
  }
}
