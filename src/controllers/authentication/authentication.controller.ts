import { Controller, Get, Param } from '@nestjs/common';


@Controller('authentication')
export class AuthenticationController {





    @Get() authenticate(@Param() params) {
        const code = params.code;
        


        //get param and exchange token 


    }
}
