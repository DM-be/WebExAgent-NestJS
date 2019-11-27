import { Injectable } from '@nestjs/common';
import { MessagesService } from '../messages/messages.service';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';
import { WebExMessageDetail } from 'src/models/webExMessageDetail';

@Injectable()
export class BirthdayMessageResponderService {


    // todo: improve, only send once per day etc. 


    // randomize counter per day 

    private counter: number = 0;

     // delay time to send response again

    private RESPONSES: string [] = ["Proficiat!", "Gelukkige verjaardag!", "Happy birthday!", "gelukkige verjaardag", "proficiat!"]
    private REGEX = " /gelukkige verjaardag|proficiat|happy birthday|gelukkige verjaardag|happy one/gm;"
    private COUNTER_RANGE: number; 

    // TODO: add from environment (birthdayroomid)
    private ROOM_ID = "Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl";


    constructor(private messageService: MessagesService){}


    private async sendHappyBirthdayToRoom() {
        try {
            const text = this.RESPONSES[Math.floor(Math.random() * this.RESPONSES.length)];
            const webExMessageResponse: WebExMessageResponse = {
                roomId: this.ROOM_ID,
                text,
            }
            await this.messageService.postMessageResponseInRoom(webExMessageResponse);
        } catch (error) {
            console.log(error);

        }
    }

    private async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }
    // receives the body with text
    public async respondWhenNeeded(webExMessageDetail: WebExMessageDetail) {
        if(this.containsBirthdayString(webExMessageDetail))
        {
            this.counter++;
        }
        if(this.counter === 5)
        {
            try {
                await this.sendHappyBirthdayToRoom();
                this.counter = 0;
            } catch (error) {
                console.log(error);
            }
        }
    }

    private containsBirthdayString(webExMessageDetail: WebExMessageDetail): boolean {
        let regExp = new RegExp(this.REGEX);
        return regExp.test(webExMessageDetail.text);
    }

    private resetCounterWithinRange() {
        
    }

}
