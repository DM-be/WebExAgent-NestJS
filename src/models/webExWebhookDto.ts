import { WebHookData } from "./webHookData";

export interface webExWebhookDto {
    name: string,
    resource: string,
    targeturl: string, 
    appId: string,
    data: WebHookData;
}


/*

{ id:
   'Y2lzY29zcGFyazovL3VzL1dFQkhPT0svNWRmZmZhNWUtZjk0ZS00MDljLWFmZWYtMjdjNzQ5ZTIyOTI5',
  name: 'happybirthday2',
  targetUrl: 'https://fa338fd9.ngrok.io/birthday',
  resource: 'messages',
  event: 'created',
  filter:
   'roomId=Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl',
  orgId: 'Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi9jb25zdW1lcg',
  createdBy:
   'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9jN2YzNDVmNS1jY2FlLTRiYmMtYjdlMS0wMjk3ZmFlMDg0NmY',
  appId:
   'Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0NmMzkyNWU5NDFmMzhhYTc0M2Y0MmFiNzcwZmZhZjFhNTIyMjcxZDI5OTQ4NDhjNjk2YWMwYTEwN2Q2YTg5MjI3',
  ownedBy: 'creator',
  status: 'active',
  created: '2019-11-27T10:41:56.689Z',
  actorId:
   'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9jN2YzNDVmNS1jY2FlLTRiYmMtYjdlMS0wMjk3ZmFlMDg0NmY',
  data:
   { id:
      'Y2lzY29zcGFyazovL3VzL01FU1NBR0UvNGI3ZjhkNTAtMTExNC0xMWVhLThkY2UtZDEwYjQyZWI1ZmQ4',
     roomId:
      'Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl',
     roomType: 'group',
     personId:
      'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9jN2YzNDVmNS1jY2FlLTRiYmMtYjdlMS0wMjk3ZmFlMDg0NmY',
     personEmail: 'dmorent@spotit.be',
     created: '2019-11-27T12:49:05.189Z' } }

*/