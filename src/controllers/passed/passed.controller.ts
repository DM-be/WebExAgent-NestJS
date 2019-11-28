import { Controller, Post, Body } from '@nestjs/common';
import { webExWebhookDto } from 'src/models/webExWebhookDto';
import { MessagesService } from 'src/services/messages/messages.service';
import { PassedExamResponderService } from 'src/services/passed-exam-responder/passed-exam-responder.service';

@Controller('passed')
export class PassedController {

    constructor(private messagesService: MessagesService, private passedExamResponderService: PassedExamResponderService) {}
    
    @Post()
    async happyBirthdayRoomMessageReceived(@Body() webExWebhookDto: webExWebhookDto) {
        try {
            const webExmessageDetail = await this.messagesService.getMessageDetail(webExWebhookDto);
            await this.passedExamResponderService.respondWhenNeeded(webExmessageDetail);
        } catch (error) {
            console.log(error)
        }
    }

    
}
