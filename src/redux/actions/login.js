import ActionTypes from './types'

export const loginSuccess = (tokens) => 
{
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: tokens
    }
}