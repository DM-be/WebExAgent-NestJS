import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://nestjs.com', 301)
  getHello(@Body() body) {
    console.log(body)
   // return this.appService.getHello();
  }
}
