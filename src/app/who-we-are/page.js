import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBContainer
} from '@/lib/mdb-react-ui-kit';
import React from 'react';

import Image from 'next/image';

import pic from '../../../public/who-we-are-new.jpg'

function WhoWeAre()
{
    return (
        <div>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('/Empty_Border.png')", height: '400px' }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-black'>
                                <h1 className='mb-3 font-bold text-6xl'>Who We Are</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MDBContainer className="px-4 overflow-hidden mt-5" style={{ lineHeight: 2 }}>
                <MDBRow className="gx-5 gy-5 pt-3">
                    <div className="col-12 col-md-6 p-3">
                        <MDBRow className="mb-3">
                            <MDBCol>
                                <h1 className="text-center md:text-left font-bold">
                                    Welcome to <br></br> <span className="hover:text-blue-600">CodeWrite Academy</span>
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3 text-lg text-zinc-800">
                            <MDBCol>
                                <p>Welcome to CodeWrite Academy, a student-led volunteer organization dedicated to teach the next generation of programmers. We believe that programming is an essential skill and we hope to inspire and empower the future. </p>

                                <p>Our diverse team of talented volunteers is passionate in helping make programming accessible and enjoyable for all. Through our fun and interactive lessons, challenges, and projects, kids are taught in a way that'll stick. Our experienced mentors guide students through the process, ensuring that they understand the content through and through.</p>

                                <p>Being students ourselves, we understand the problems with current teaching methods and aim to curate a curriculum that is fun and engaging for our students, helping them become the next brightest students of their generation. </p>
                            </MDBCol>
                        </MDBRow>

                    </div>

                    <div className="col-12 col-md-6 p-3">
                        <Image src={pic} alt="Kids leading kids" className="w-[510px] mx-auto"></Image>
                    </div>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default WhoWeAre;