import Connection from './communication/connections/Connection';
import StandardJsonHeaders from './communication/headers/StandardJsonHeaders'

import { apiConnection } from './env';

export default new Connection( 
    apiConnection.protcol, 
    apiConnection.host, 
    apiConnection.port,
    new StandardJsonHeaders()
);