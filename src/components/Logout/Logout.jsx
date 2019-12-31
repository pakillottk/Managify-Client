import React from 'react'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import API from '../../ApiConnection'
import { authPaths } from '../../env'
import AuthTokenRouter from '../../communication/routers/AuthTokenRouter'

const AuthRouter = new AuthTokenRouter(API, authPaths)

class Logout extends React.Component
{
    constructor(props)
    {
        super(props)

        this.logout = this.logout.bind(this)
    }

    async logout()
    {
        await AuthRouter.logout()
        this.props.history.replace('/')
    }

    render()
    {
        return(
            <OverlayTrigger placement="bottom"
                            delay={{show: 250, hide:400}} 
                            overlay={<Tooltip>Cerrar sesión</Tooltip>}>
                <Button onClick={this.logout}>
                    <i className="material-icons text-danger"> exit_to_app </i>
                </Button>
            </OverlayTrigger>
        )
    }
}
export default Logout