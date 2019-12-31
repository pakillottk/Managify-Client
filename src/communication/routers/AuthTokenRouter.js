import Request from '../Request';

class AuthTokenRouter {
    constructor( connection, authPaths ) {
        this.connection = connection;
        this.authPaths  = authPaths;
    }

    ObjectToURLEnconded( obj ) {
        const params = [];
        Object.keys( obj ).forEach(
            ( key ) => {
                params.push( key + '=' + encodeURIComponent( obj[ key ] ) );
            }
        )

        return params.join( '&' );
    }

    async attemptLogin( data ) {        
        const request = new Request(  this.ObjectToURLEnconded( data ) );        
        const response = await this.connection.post( this.authPaths.login, request );

        const tokens  = response.data.data;
        //const refreshToken = response.data.data.refresh_token;
        
        //TODO: store the tokens to reuse on page refresh or to update the token

        this.connection.updateHeaders( 'Authorization', 'Bearer ' + tokens.access_token );
        return tokens
    }
    /*
    async refresh() {
        const refreshToken = ''; //TODO: get the token from where is stored
        const response = await this.connection.post( this.authPaths.refresh, { refresh_token: refreshToken } );
        console.log( response );

        //TODO: Update the tokens and the store
        const accessToken  = response.data.data.access_token;
        const refreshToken = response.data.data.refresh_token;

        this.connection.updateHeaders( 'Authorization', 'Bearer ' + accessToken );
    }
    */

    async me()
    {
        const response = await this.connection.get( this.authPaths.me );
        return response.data;
    }

    async logout() {
        const request  = new Request(); 
        const response = await this.connection.post( this.authPaths.logout, request );
        this.connection.removeHeader( 'Authorization' );
        window.localStorage.removeItem('tokens')
    }
}

export default AuthTokenRouter;