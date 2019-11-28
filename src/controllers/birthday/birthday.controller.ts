import { Controller, Post, Body } from '@nestjs/common';
import { webExWebhookDto } from 'src/models/webExWebhookDto';
import { MessagesService } from '../../services/messages/messages.service';
import { BirthdayMessageResponderService } from '../../services/birthday-message-responder/birthday-message-responder.service';

@Controller('birthday')
export class BirthdayController {

    constructor(private birthdayMessageResponderService: BirthdayMessageResponderService, private messagesService:MessagesService) {}


    @Post()
    async happyBirthdayRoomMessageReceived(@Body() webExWebhookDto: webExWebhookDto) {
        try {
            const webExmessageDetail = await this.messagesService.getMessageDetail(webExWebhookDto);
            await this.birthdayMessageResponderService.respondWhenNeeded(webExmessageDetail);
            console.log("received")
        } catch (error) {
            console.log(error)
        }
    }
}


