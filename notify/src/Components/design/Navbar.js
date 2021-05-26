import React, { Component } from 'react'
import { ButtonToolbar,Navbar,Container, ButtonGroup, Nav } from 'react-bootstrap'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const bootstrap = require('bootstrap')

const logout = () => {
  document.cookie = 'loginToken=;'+'expires:0'+";"
  window.location.replace('/')
}
export class NavbarCustom extends Component {
  render() {
    return (
      <div>
        
        <Container className=' navbar-light fixed-top' id='navbar' aria-orientation='horizontal' fluid>
        <Navbar expand='lg'>
          <Navbar.Brand href="/dashbord" id='dashbordText'>Notifi</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text id='text'>
              Signed in as: <a href="#login" >Mark Otto</a>
            </Navbar.Text>
            
            <Nav.Link id='notification' >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
<span class="badge bg-secondary">7</span>
</Nav.Link>
<Nav.Link  onClick={logout}> 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          </Nav.Link>

            
            
          </Navbar.Collapse>
          </Navbar>
        </Container>
      
        

      </div>
    )
  }
}

export default NavbarCustom
