import { Controller, Post, Body } from '@nestjs/common';

@Controller('birthday')
export class BirthdayController {


    @Post()
    happyBirthdayRoomMessageReceived(@Body() body): string {
        console.log(body);
     return "";

    }
}


