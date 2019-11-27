export interface WebHookData  {
    id: string // id used for messagedetails
    roomId: string,
    roomType: string,
    personId: string,
    personEmail: string,
    created: string // ISO string
}



/*

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