import API from './ApiConnection'
import { authPaths } from './env'

import CryptoService from './communication/crypto/CryptoService'
import AuthTokenRouter from './communication/routers/AuthTokenRouter'

const AuthRouter = new AuthTokenRouter(API, authPaths)

const AttemptLogin = async (store, history) =>
{
    const AuthRouter = new AuthTokenRouter(API, authPaths )
    
    // attempt to rearm auth data
    const cryptedTokens = window.localStorage.getItem('tokens')
    let tokens
    if( cryptedTokens )
    {
        tokens = JSON.parse(
            CryptoService.decrypt(cryptedTokens)
        )
    }
    else
    {
        // can't login go to home (login)
        history.replace('/')
        return
    }

    try
    {
        API.updateHeaders( 'Authorization', 'Bearer ' + tokens.access_token );
        AuthRouter.me()
    }
    catch(e)
    {
        // TODO(pgm) Refresh the token

        // token not valid, go to login
        history.replace('/')
    }

}
export {AttemptLogin}