import { Injectable } from '@nestjs/common';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';
import { MessagesService } from '../messages/messages.service';
import { WebExMessageDetail } from 'src/models/webExMessageDetail';

@Injectable()
export class PassedExamResponderService {
    private counter: number = 0;
    private RESPONSES: string [] = ["nice", "Nice! proficiat!", "Super, proficiat!", "proficiat", "proficiat!"]
    private REGEX = ` /geslaagd|ik ben er door|proficiat|ik ben erdoor|proficiat!/gm`;


    // TODO: add from environment (spotit academy)
    private ROOM_ID = "Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl";

    constructor(private messageService: MessagesService) {}


    private async sendCongratsToRoom() {
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
        console.log(`${webExMessageDetail.text} and match: ${this.containsPassedString(webExMessageDetail)}`)
        if(this.containsPassedString(webExMessageDetail))
        {
            
            this.counter++;
        }
        if(this.counter === 5)
        {
            try {
                await this.sendCongratsToRoom();
                this.counter = 0;
            } catch (error) {
                console.log(error);
            }
        }
    }

    private containsPassedString(webExMessageDetail: WebExMessageDetail): boolean {
        let regExp = new RegExp(this.REGEX);
        console.log(webExMessageDetail.text)
        return regExp.test(webExMessageDetail.text);
    }

    


}
