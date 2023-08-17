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

function WhoWeAre()
{
    return (
        <div>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Who We Are</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MDBContainer className="px-4 overflow-hidden" style={{ lineHeight: 2 }}>
                <MDBRow className="gx-5 gy-5 pt-3">
                    <MDBCol size='6' className="p-3">
                        <MDBRow className="mb-3">
                            <MDBCol>
                                <h1>
                                    Welcome to CodeWrite Academy
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol>
                                <p>Welcome to CodeWrite Academy, a student-led volunteer organization dedicated to teaching programming to younger students. We believe that coding is a vital skill for the future and aim to inspire and empower the next generation of programmers. </p>

                                <p>Our diverse team of talented mentors is passionate about making programming accessible and enjoyable for all. Through interactive workshops, coding challenges, and hands-on projects, we create a supportive learning environment. Our experienced mentors guide students, fostering collaboration and inclusivity. </p>

                                <p>As students ourselves, we understand the cripes with current teaching methods and aim to create a curriculum that is fun and engaging for students, helping them achieve their dreams, in the simplest way possible.</p>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>

                    <MDBCol size='6' className="p-3">

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default WhoWeAre;