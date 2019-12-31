import React from 'react'

import UserData from './UserData/UserData'
import Logout from './Logout/Logout'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class Layout extends React.Component
{
    createNavDropdown(title, path)
    {
        return(
            <NavDropdown title={title}>
                <NavDropdown.Item href={`${path}/create`}>Nuevo</NavDropdown.Item>
                <NavDropdown.Item href={path}>Listado</NavDropdown.Item>
            </NavDropdown>
        )
    }

    render()
    {
        return(
            <div>
                {window.location.pathname !== '/' && <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/dashboard">Managify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">                            
                            {this.createNavDropdown('Clientes', 'clients')}
                            {this.createNavDropdown('Proveedores', 'providers')}
                            {this.createNavDropdown('Articulos', 'products')}
                            {this.createNavDropdown('Eventos', 'events')}
                        </Nav>
                        <UserData />
                        <Logout history={this.props.history}/>
                    </Navbar.Collapse>
                </Navbar>}
                <Container>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}