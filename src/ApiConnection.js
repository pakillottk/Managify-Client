import Connection from './communication/connections/Connection';

import { apiConnection } from './env';

export default new Connection( 
    apiConnection.protcol, 
    apiConnection.host, 
    apiConnection.port 
);