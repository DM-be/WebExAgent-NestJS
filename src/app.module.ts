import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirthdayController } from './controllers/birthday/birthday.controller';
import { MessagesService } from './services/messages/messages.service';
import { BirthdayMessageResponderService } from './services/birthday-message-responder/birthday-message-responder.service';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { AuthenticationService } from './services/authentication/authentication.service';

@Module({
  imports: [],
  controllers: [AppController, BirthdayController, AuthenticationController],
  providers: [AppService, MessagesService, BirthdayMessageResponderService, AuthenticationService],
})
export class AppModule {}
