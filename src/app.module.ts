import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirthdayController } from './controllers/birthday/birthday.controller';
import { MessagesService } from './services/messages/messages.service';
import { BirthdayMessageResponderService } from './services/birthday-message-responder/birthday-message-responder.service';

@Module({
  imports: [],
  controllers: [AppController, BirthdayController],
  providers: [AppService, MessagesService, BirthdayMessageResponderService],
})
export class AppModule {}
