import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthenticationService } from '../../services/authentication/authentication.service';


@Controller('authentication')
export class AuthenticationController {


    constructor(private authenticationService: AuthenticationService) {}





    @Get() 
    async authenticate(@Query() query) {
       // console.log(query)
        try {
            await this.authenticationService.createInitialToken(query.code);
        } catch (error) {
            console.log(error);
            
        }
        
        // parse code --> exchange with auth service
        


        //get param and exchange token 


    }
}
