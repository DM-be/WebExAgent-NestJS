export interface RefreshedTokenResponseDto {
    access_token: string,
    expires_in: string // seconds
    refresh_token: string,
    refresh_token_expires_in: string, 



    /*
{
 "access_token":"ZDI3MGEyYzQtNmFlNS00NDNhLWFlNzAtZGVjNjE0MGU1OGZmZWNmZDEwN2ItYTU3",
 "expires_in":1209600, //seconds
 "refresh_token":"MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTEyMzQ1Njc4",
 "refresh_token_expires_in":7776000 //seconds
}

    */
}