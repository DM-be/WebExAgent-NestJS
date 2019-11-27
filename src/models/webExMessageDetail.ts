export interface WebExMessageDetail {
    text: string,
    markdown: string,
    personId: string,
    mentionedPeople: string []; // todo: people object
    
}


/*
text
string
The message, in plain text. If markdown is specified this parameter may be optionally used to provide alternate text for UI clients that do not support rich text.

markdown
string
The message, in Markdown format.

files
array
Public URLs for files attached to the message. For the supported media types and the behavior of file uploads, see Message Attachments.

personId
string
The person ID of the message author.

personEmail
string
The email address of the message author.

mentionedPeople
array
People IDs for anyone mentioned in the message.

mentionedGroups
array
Group names for the groups mentioned in the message.


attachments
array
Message content attachments attached to the message. See the Cards Guide for more information.

contentType
string
The content type of the attachment.

content
Adaptive Card
Adaptive Card content.

created
string
The date and time the message was created.



*/