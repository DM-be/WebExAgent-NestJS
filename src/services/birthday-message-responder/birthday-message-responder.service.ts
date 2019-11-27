import { Injectable } from '@nestjs/common';
import { MessagesService } from '../messages/messages.service';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';

@Injectable()
export class BirthdayMessageResponderService {


    // only send bday once a day
    private counter: number; 
    private delayTime: any; // delay time to send response again
    private RESPONSES: string [] = ["Proficiat!", "Gelukkige verjaardag!"]
    private REGEX = " /gelukkige verjaardag|proficiat|happy birthday|gelukkige verjaardag|happy one/gm;"
    
    // TODO: add from environment (birthdayroomid)
    private ROOM_ID = "Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl";


    constructor(private messageService: MessagesService){}


    private sendHappyBirthdayToRoom() {
        try {
            const webExMessageResponse: WebExMessageResponse = {
                roomId: this.ROOM_ID,
                text:  this.RESPONSES[(Math.floor(Math.random() * this.RESPONSES.length)]
            }
            await this.messageService.postMessageResponseInRoom(webExMessageResponse);
        } catch (error) {
            console.log(error);
        }
    }

    
}
