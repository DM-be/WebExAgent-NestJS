import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';

@Injectable()
export class AuthenticationService {

    private CLIENT_ID: string = "C0fe0db3ba1596973a08a94c310617504378efe226432c5bd06ae4dafdb7638bc";
    private CLIENT_SECRET: string = "bdb26efd4e914a49008ecbad862ebb9f174916e0f2bd84cd233e4f00f8ea27a5";

    private URL = "https://api.ciscospark.com/v1/access_token";


    public refreshToken() {

        try {
            
            
        } catch (error) {
            
        }

        

    }

}
