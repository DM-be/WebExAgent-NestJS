import { Injectable } from '@nestjs/common';

@Injectable()
export class PassedExamResponderService {
    private counter: number = 0;
    private RESPONSES: string [] = ["nice", "Nice! proficiat!", "Super, proficiat!", "proficiat", "proficiat!"]
    private REGEX = ` /geslaagd|ik ben er door|proficiat|ik ben erdoor|proficiat!/gm`;


    // TODO: add from environment (spotit academy)
    private ROOM_ID = "Y2lzY29zcGFyazovL3VzL1JPT00vZjAxNWMzZjAtMTBmZC0xMWVhLTk5YWItOTFkZWI1Yzg5NzBl";


}
