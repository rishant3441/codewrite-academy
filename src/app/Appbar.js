'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './Appbar.css'
import '@/app/globals.css'
import { Overpass_Mono } from 'next/font/google';

import { Image } from 'next/image'

const overpass_mono = Overpass_Mono({ subsets: ['latin'] })

function Appbar()
{
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/" className="ps-0 pt-0 pe-0 pb-0">

              <img src="/Logo.png" width="95" height="95" alt="Logo"/>{' '}

              <div className="appbar float-right pt-4">
                <div className={overpass_mono.className}>
                  CodeWrite Academy
                </div>
              </div>
                
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/who-we-are">Who We Are</NavDropdown.Item>
                    <NavDropdown.Item href="/volunteers">
                      Our Volunteers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="https://forms.gle/oBFrYXjVtM6ZTjL38" target="_blank" rel="noopener noreferrer">Start Learning</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          );
}

export default Appbar;