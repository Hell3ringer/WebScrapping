import React, { Component } from 'react'
import { ButtonToolbar,Navbar,Container } from 'react-bootstrap'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const bootstrap = require('bootstrap')
export class NavbarCustom extends Component {
  render() {
    return (
      <div>
        
        <Container className='bg-primary' aria-orientation='horizontal' fluid>
        <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button id='notification' className='btn btn-rounded'>click</button>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          </Navbar>
        </Container>
      
        

      </div>
    )
  }
}

export default NavbarCustom
