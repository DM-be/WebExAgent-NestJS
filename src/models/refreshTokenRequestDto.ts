export interface RefreshTokenRequestDto {
    grant_type: string,
    client_id: string,
    client_secret: string,
    refresh_token: string,

}


/*
grant_type	This should be set to "refresh_token"
client_id	Issued when creating your integration
client_secret	Remember this guy? You kept it safe somewhere when creating your integration
refresh_token	The refresh token you received from the previous step

*/