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
        return '?' + this.query.toString();
    }
}

export default Request;