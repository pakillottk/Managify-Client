import axios from 'axios';

class Connection {
    constructor( protocol, host, port ) {
        this.protocol = ( protocol || 'http' ) + '://';
        this.host     = ( host || 'localhost' );
        this.port     = ':' + ( port || ( this.protocol === 'https://' ? 443 : 80 ) );
    }

    basePath() {
        return this.protocol + this.host + this.port;
    }

    get( path, request ) {
        return axios.get( this.basePath() + path + request.getQueryString() );
    }

    post( path, request ) {
        return axios.post( this.basePath() + path, request.input );
    }

    put( path, request ) {
        return axios.put( this.basePath() + path, request.input );
    }

    delete( path, request ) {
        return axios.delete( this.basePath() + path );
    }
}

export default Connection;