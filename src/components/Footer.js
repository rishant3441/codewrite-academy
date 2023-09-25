import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from '../lib/mdb-react-ui-kit';
import { overpass_mono } from '@/app/layout';

function Footer()
{
    return (
        <MDBFooter bgColor="light" className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='https://github.com/rishant3441' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                    </div>
                </section>
            <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                            <MDBIcon icon="gem" className="me-3" />
                            CodeWrite Academy
                        </h6>
                        <p>
                            Striving to provide free, quality education for the the next generation on the internet.
                        </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                        <p>
                            <a href='/who-we-are' className='text-reset'>
                                About Us
                            </a>
                        </p>
                        <p>
                            <a href='https://forms.gle/oBFrYXjVtM6ZTjL38' className='text-reset'>
                                Sign Up
                            </a>
                        </p>
                        <p>
                            <a href='/volunteers' className='text-reset'>
                                Volunteers
                            </a>
                        </p>
                        <p>
                            <a href='/contact-us' className='text-reset'>
                                Contact Us
                            </a>
                        </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p>
                            <MDBIcon icon="home" className="me-2" />
                            Palm Beach County, Florida
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            codewriteacademy@gmail.com
                        </p>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: &nbsp; 
                    <a className='text-reset fw-bold' href='https://codewriteacademy.org'>
                    CodeWriteAcademy.org
                    </a>
                    &nbsp;
                    Website created by Rishan Thangaraj
                </div>
        </MDBFooter>
    )
}

export default Footer;