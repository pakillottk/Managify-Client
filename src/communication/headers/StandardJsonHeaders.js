import Headers from './Headers';

class StandardJsonHeaders extends Headers {
    constructor( headers ) {
        const defaultJsonConfig = {
            Accept: 'application/json'
        };
        if( headers ) {
            super( {...defaultJsonConfig, headers } );    
        }
        
        super( defaultJsonConfig );
    }
}

export default StandardJsonHeaders;