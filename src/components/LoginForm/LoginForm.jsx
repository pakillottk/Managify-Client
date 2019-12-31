import React from 'react'
import { Alert, Container, Form, Button } from 'react-bootstrap'
import API from '../../ApiConnection'
import AuthTokenRouter from '../../communication/routers/AuthTokenRouter'
import { authPaths } from '../../env'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginSuccess } from '../../redux/actions/login'

const AuthRouter = new AuthTokenRouter(API, authPaths)

class LoginForm extends React.Component
{
    state =
    {
        username:'',
        password:'',
        error: ''
    }

    constructor(props)
    {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event)
    {
        const state = {...this.state}
        state[event.target.name] = event.target.value.trim()
        this.setState({...state})
    }

    validateInput(username, password)
    {
        if( username === null || username.length === 0 )
        {
            this.setState({error:'El usuario es obligatorio'})        
            return false    
        }
        else if( username === null || password.length === 0 )
        {
            this.setState({error:'La contraseña es obligatoria'})          
            return false  
        }

        return true
    }

    async handleSubmit(event)
    {
        event.preventDefault()

        if( !this.validateInput(this.state.username, this.state.password) )
        {
            return
        }

        try
        {
            const tokens = await AuthRouter.attemptLogin({username: this.state.username, password: this.state.password})
            this.props.loginSuccess(tokens)
            // go to home
            this.props.history.replace('/dashboard')
        }
        catch(e)
        {
            this.setState({error:'No se pudo iniciar sesión'})            
        }
    }

    render()
    {
        return(
            <Container style={{
                position: 'fixed',
                background:'white',
                padding:'40px 40px 0px 40px',
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                {this.state.error.length > 0 && <Alert variant="danger">
                    {this.state.error}
                </Alert>}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control   name="username"
                                        placeholder="Usuario" 
                                        onChange={this.handleInputChange} 
                                        value={this.state.username}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control   name="password" 
                                        type="password" 
                                        placeholder="Contraseña" 
                                        onChange={this.handleInputChange}
                                        value={this.state.password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default connect(
    () => { return {} },
    ( dispatch ) => 
    {
        return {
            loginSuccess: bindActionCreators( loginSuccess, dispatch )
        }
    }
)(LoginForm)