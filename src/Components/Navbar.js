import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './Screenshot 2024-09-22 092927.png'
import logo1 from './logo1.png'
import logo3 from './logo3.png'

export default class Navvbar extends Component {
  render() {
    return (
      <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="tw-bg-[#E9FEE7] tw-shadow-xl mb-3 p-3">
          <Container fluid>
            <Navbar.Brand href="#">
            <img src={logo1} alt="" width={190}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo3} alt="" width={190}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center  flex-grow-1 pe-3">
                  <Nav.Link href="#action1 tw-text-slate-900">Catalog</Nav.Link>
                  <NavDropdown
                    title="How it Works"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">How Printif Works</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Print On Demand
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    Printify Quality Promise
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    What To Sell?
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Pricing</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  
                    <NavDropdown.Item href="#action5">
                    Printif Studio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    Printif Express Delivery
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Transfer Products</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Order In Bulk
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Pricing</Nav.Link>


                  <NavDropdown
                    title="Need Help?"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  
                    <NavDropdown.Item href="#action5">
                    Help Center
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    Contacts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">My Requests</NavDropdown.Item>
                  
                  </NavDropdown>
                </Nav>
                
                  <Button variant="outline-success" className='mx-2'>Login</Button>
                  <Button variant="success" className='mx-2'>Signup</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
    )
  }
}
