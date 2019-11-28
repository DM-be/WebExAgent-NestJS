import { Injectable } from '@nestjs/common';
import { MessagesService } from '../messages/messages.service';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';
import { WebExMessageDetail } from 'src/models/webExMessageDetail';

@Injectable()
export class BirthdayMessageResponderService {

    private counter: number = 0;
    private RESPONSES: string [] = ["Proficiat!", "Gelukkige verjaardag!", "Happy birthday!", "gelukkige verjaardag", "proficiat!"]
    private REGEX = ` /gelukkige verjaardag|proficiat|happy birthday|gelukkige verjaardag|happy one/gm`;


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

    public async respondWhenNeeded(webExMessageDetail: WebExMessageDetail) {
        console.log(`${webExMessageDetail.text} and match: ${this.containsBirthdayString(webExMessageDetail)}`)
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
        console.log(webExMessageDetail.text)
        return regExp.test(webExMessageDetail.text);

    }

}
