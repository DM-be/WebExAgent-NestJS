import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirthdayController } from './controllers/birthday/birthday.controller';
import { MessagesService } from './services/messages/messages.service';
import { BirthdayMessageResponderService } from './services/birthday-message-responder/birthday-message-responder.service';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { AuthenticationService } from './services/authentication/authentication.service';
import { PassedExamResponderService } from './services/passed-exam-responder/passed-exam-responder.service';
import { PassedController } from './controllers/passed/passed.controller';

@Module({
  imports: [],
  controllers: [AppController, BirthdayController, AuthenticationController, PassedController],
  providers: [AppService, MessagesService, BirthdayMessageResponderService, AuthenticationService, PassedExamResponderService],
})
export class AppModule {}
