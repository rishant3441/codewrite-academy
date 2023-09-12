'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Appbar.css'
import '@/app/globals.css'
import { Overpass_Mono } from 'next/font/google';

import { Image } from 'next/image'

const overpass_mono = Overpass_Mono({ subsets: ['latin'] })

function Appbar()
{
    return (
      <Navbar expand="lg" style={{ boxShadow: "none" }} className="bg-blue-50 w-full z-10">
              <Navbar.Brand href="/" className="mr-0">

              <img src="/Logo.png" width="80" height="80" alt="Logo" className="inline-block align-top mr-2"/>

              <div className="appbar inline-block m-0 text-lg lg:!text-3xl">
                <div className={overpass_mono.className}>
                  CodeWrite Academy
                </div>
              </div>
                
              </Navbar.Brand>
              <Navbar.Toggle className="mr-3" aria-controls="basic-navbar-nav inline"/>
              <Navbar.Collapse id="basic-navbar-nav" className="z-1 grow">
                <Nav className="me-auto mx-4 md:mx-0">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/who-we-are">Who We Are</NavDropdown.Item>
                    <NavDropdown.Item href="/volunteers">
                      Our Volunteers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/how-we-work">How We Work</Nav.Link>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                  <Nav.Link href="https://forms.gle/oBFrYXjVtM6ZTjL38" target="_blank" rel="noopener noreferrer">Start Learning</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          );
}

export default Appbar;