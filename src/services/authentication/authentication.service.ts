import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import { RefreshTokenRequestDto } from 'src/models/refreshTokenRequestDto';
import { RefreshedTokenResponseDto } from 'src/models/refreshedTokenResponseDto';
import { InitialTokenRequestDto } from 'src/models/initialTokenRequestDto';

@Injectable()
export class AuthenticationService {

    private CLIENT_ID: string = "C0fe0db3ba1596973a08a94c310617504378efe226432c5bd06ae4dafdb7638bc";
    private CLIENT_SECRET: string = "bdb26efd4e914a49008ecbad862ebb9f174916e0f2bd84cd233e4f00f8ea27a5";

    private REFRESH_CREATE_TOKEN_URL = "https://api.ciscospark.com/v1/access_token";
    private REDIRECT_URI = "https://97401726.ngrok.io/authentication";

    public ACCESS_TOKEN: string; // expires in +- 13 days
    private REFRESH_TOKEN: string; 
    






    public async createInitialToken(code: string) {

        try {
            const refreshTokenDto: InitialTokenRequestDto = {
                code,
                grant_type: "authorization_code",
                client_id: "C0fe0db3ba1596973a08a94c310617504378efe226432c5bd06ae4dafdb7638bc",
                client_secret: "7b81606489e42b8435ea54c63f85f3812d5b234a94e2313ddec9d1e29c54786e",
                redirect_uri: this.REDIRECT_URI
            };
            const axiosResponse: AxiosResponse<any> = await Axios.post(this.REFRESH_CREATE_TOKEN_URL, refreshTokenDto);
            const refreshedTokenResponseDto = axiosResponse.data as RefreshedTokenResponseDto;
            console.log(axiosResponse.data);
            this.ACCESS_TOKEN = refreshedTokenResponseDto.access_token;
            console.log(this.ACCESS_TOKEN);
            this.REFRESH_TOKEN = refreshedTokenResponseDto.refresh_token;
        } catch (error) {
            console.log(error);
        }

    

        

    }

    public async refreshAccessToken() {

        try {
            
        const refreshTokenRequestDto: RefreshTokenRequestDto = {
            client_id: this.CLIENT_ID,
            client_secret: this.CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: this.REFRESH_TOKEN
        }
        const axiosResponse: AxiosResponse<any> = await Axios.post(this.REFRESH_CREATE_TOKEN_URL, refreshTokenRequestDto);
        const refreshedTokenResponseDto = axiosResponse.data as RefreshedTokenResponseDto;
        this.ACCESS_TOKEN = refreshedTokenResponseDto.access_token;
        //!  Generating a new access token automatically renews the lifetime of your refresh token.
        } catch (error) {
            console.log(error);
        }


         
    }   



}
