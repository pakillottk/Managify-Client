import React from 'react'
import API from '../../ApiConnection'
import AuthTokenRouter from '../../communication/routers/AuthTokenRouter'
import { authPaths } from '../../env'

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap'

const AuthRouter = new AuthTokenRouter(API, authPaths )
class UserData extends React.Component
{
    state ={
        username: '',
        name: '',
        avatar_url: ''
    }

    async componentWillMount()
    {
        try
        {
            const userData = await AuthRouter.me()
            this.setState({
                            username: userData.username,
                            name: userData.name, 
                            avatar_url: userData.avatar_url
                        })
        }
        catch(e)
        {
            alert(e)
        }
    }

    async getUserData()
    {
        
    }

    render()
    {
        const tooltip = <Tooltip> {this.state.name} <br/> ({this.state.username}) </Tooltip>

        return(
            <OverlayTrigger placement="bottom" delay={{show: 250, hide:400}} overlay={tooltip}>
                <Image  className="border scale-hover" 
                        width={40} 
                        height={40}
                        src={this.state.avatar_url || 'img/default-avatar.jpg'} 
                        roundedCircle/>
            </OverlayTrigger>
        )
    }
}
export default UserData