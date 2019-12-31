import CryptoService from '../../communication/crypto/CryptoService'
import ActionTypes from '../actions/types'

export default (state = {}, action) =>
{
    if( action.type === ActionTypes.LOGIN_SUCCESS )
    {
        const tokens = action.payload

        const tokensStr = JSON.stringify( tokens );
        const cryptedTokens = CryptoService.encrypt( tokensStr );

        window.localStorage.removeItem('tokens')
        window.localStorage.setItem('tokens', cryptedTokens)
    }

    return state
}