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

    //private BEARER_TOKEN = "Nzg2OTE1OTAtNmM3YS00Mjc2LWFiMjgtMGEwYjRlNjU4MDhkYjIwZGJlMzQtY2I0_PF84_consumer";
    //private BEARER_TOKEN = "MzJiOTg4NWQtMjEwMS00YjdiLWFkYzktZjY5NmU0NDEyNmM1NWM0MGIwNTktNDBj_PF84_consumer";
    
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

