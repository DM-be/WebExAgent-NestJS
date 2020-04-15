# WebExAgent-NestJS
An integration with the chat program Webex that sends responses to a channel based on messages received.

## Description

This integration with webex is a NestJS server integrated with the Webex API. It was built for fun to [respond](https://github.com/DM-be/WebExAgent-NestJS/blob/master/src/services/birthday-message-responder/birthday-message-responder.service.ts) "Happy birthday!" whenever enough people in a particular channel (one created specially for birthday wishes) send birthday wishes. This is done by responding to a [webhook](https://github.com/DM-be/WebExAgent-NestJS/blob/master/src/controllers/birthday/birthday.controller.ts) message provided by the API. It uses regular expressions to check received messages in the channel and sends a variation of a Happy birtday message to that channel. 
It also exchanges the needed tokens associated with my Webex account. 

It was a fun exercise to try out some [token handling](https://github.com/DM-be/WebExAgent-NestJS/blob/master/src/services/authentication/authentication.service.ts) with an external API. 
