import { Injectable } from '@nestjs/common';
import { WebExMessageDetail } from 'src/models/webExMessageDetail';
import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';
import { webExWebhookDto } from 'src/models/webExWebhookDto';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable()
export class MessagesService {


    constructor(private authenticationService: AuthenticationService) {}

    private BASE_URL = "https://api.ciscospark.com/v1/messages";

    public async getMessageDetail(webExWebHookDto: webExWebhookDto): Promise<WebExMessageDetail> {
        const axiosRequestConfig: AxiosRequestConfig = {
            headers: {
              'Authorization': 'Bearer ' + this.authenticationService.ACCESS_TOKEN
            }}
        console.log("mess detail")
        console.log(this.authenticationService.ACCESS_TOKEN)   
        const messageId = webExWebHookDto.data.id;
        const url = `${this.BASE_URL}/${messageId}`;
        try {
            const axiosResponse: AxiosResponse<any> = await Axios.get(url, axiosRequestConfig );
            const webExMessageDetail = axiosResponse.data as WebExMessageDetail;
            return webExMessageDetail;
        } catch (error) {
            const resp = error as AxiosResponse;
            console.log(error);
            if(resp.status == 400)
            {
                await this.authenticationService.refreshAccessToken();
                await this.getMessageDetail(webExWebHookDto);
            }
        }
    }


    public async postMessageResponseInRoom(webExMessageResponse: WebExMessageResponse) {
        const url = this.BASE_URL;
        try {
            const axiosRequestConfig: AxiosRequestConfig = {
                headers: {
                  'Authorization': 'Bearer ' + this.authenticationService.ACCESS_TOKEN
                }}
            const axiosResponse: AxiosResponse<any> = await Axios.post(url, webExMessageResponse, axiosRequestConfig);
        } catch (error) {
            const resp = error as AxiosResponse;
            console.log(error);
            if(resp.status == 400)
            {
                await this.authenticationService.refreshAccessToken();
                await this.postMessageResponseInRoom(webExMessageResponse);
            }
        }



    }

        
        

        


}

