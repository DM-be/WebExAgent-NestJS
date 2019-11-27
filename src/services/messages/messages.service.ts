import { Injectable } from '@nestjs/common';
import { WebExMessageDetail } from 'src/models/webExMessageDetail';
import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { WebExMessageResponse } from 'src/models/webExMessageResponse';
import { webExWebhookDto } from 'src/models/webExWebhookDto';


@Injectable()
export class MessagesService {

    private BASE_URL = "https://api.ciscospark.com/v1/messages/";
    private BEARER_TOKEN = "MzJiOTg4NWQtMjEwMS00YjdiLWFkYzktZjY5NmU0NDEyNmM1NWM0MGIwNTktNDBj_PF84_consumer";

    private AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
        headers: {
          'Authorization': 'Bearer ' + this.BEARER_TOKEN,
        }}
    
    public async getMessageDetail(webExWebHookDto: webExWebhookDto): Promise<WebExMessageDetail> {
        const messageId = webExWebHookDto.data.id;
        const url = `${this.BASE_URL}/${messageId}`;
        try {
            const axiosResponse: AxiosResponse<any> = await Axios.get(url, this.AXIOS_REQUEST_CONFIG );
            const webExMessageDetail = axiosResponse.data as WebExMessageDetail;
            return webExMessageDetail;
        } catch (error) {
            console.log(error);
        }
    }


    public async postMessageResponseInRoom(webExMessageResponse: WebExMessageResponse) {
        const url = this.BASE_URL;
        try {
            const axiosResponse: AxiosResponse<any> = await Axios.post(url, webExMessageResponse, this.AXIOS_REQUEST_CONFIG);
            console.log(axiosResponse);
        } catch (error) {
            console.log(error);
        }



    }

        
        

        


}

