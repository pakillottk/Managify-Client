import Query from '../data/queries/Query';

class Request {
    constructor( input, query ) {
        this.input = input || {};
        this.query = query || new Query();
    }

    getInput( key ) {
        return this.input[ key ];
    }

    setInput( key, value ) {
        this.input[ key ] = value;
        return this.input[ key ];
    }

    getQueryString() {
        const queryString = this.query.toString();
        if( queryString === '' ) {
            return '';
        }
        
        return '?' + this.query.toString();
    }
}

export default Request;