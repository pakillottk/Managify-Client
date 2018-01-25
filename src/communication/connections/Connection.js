import axios   from 'axios';
import Headers from '../headers/Headers';

class Connection {
    constructor( protocol, host, port, headersObj ) {
        this.protocol = ( protocol || 'http' ) + '://';
        this.host     = ( host || 'localhost' );
        this.port     = ':' + ( port || ( this.protocol === 'https://' ? 443 : 80 ) );
        this.headers  = new Headers();

        if( headersObj ) {
            this.headers = headersObj;
        } 
    }

    updateHeaders( key, value ) {
        this.headers.set( key, value );
    }

    removeHeader( key ) {
        delete this.headers.headers[ key ];
    }

    basePath() {
        return this.protocol + this.host + this.port;
    }

    get( path, request ) {
        return axios.get( this.basePath() + path + request.getQueryString(), { headers: this.headers.headers } );
    }

    post( path, request ) {
        return axios.post( this.basePath() + path, request.input, { headers: this.headers.headers } );
    }

    put( path, request ) {
        return axios.put( this.basePath() + path, request.input, { headers: this.headers.headers } );
    }

    delete( path, request ) {
        return axios.delete( this.basePath() + path, { headers: this.headers.headers } );
    }
}

export default Connection;