
import React from 'react';

import {
    MDBRow,
    MDBCol,
} from '@/lib/mdb-react-ui-kit';

import rishanImg from '../../../public/RishanThangaraj.jpg'
import zoeImg from '../../../public/ZoeThevenot.png'
import zoeImgLarger from '../../../public/ZoeThevenot_new.jpg'

import VolunteerCard from './VolunteerCard';

export default function Volunteers()
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
                                <h1 className='mb-3'>Our Volunteers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        <div class="px-4">
            <MDBRow className='row-cols-1 row-cols-md-6 g-4 gx-5 pt-3' center>
                <MDBCol className="pb-4">
                    <VolunteerCard name="Rishan Thangaraj" description="Co-Founder, Mentor" imgsrc={rishanImg} imgsrc1={rishanImg}>
                        <MDBRow>
                            <MDBCol size="6" className="ps-4">
                                <h6 className="align-content-start bold-header">About Me</h6>
                                <p>
                                    I am the founder of CodeWrite Academy. Since I was 10, I&apos;ve taken a massive interest in programming but felt
                                    that most teaching methods weren&apos;t the most interesting. Now at 15, I've decided to try to remedy
                                    these problems and spread my love of programming to the next generation. On the side, I love playing video games,
                                    watching anime, and hanging out with my friends. I am currently a student of American Heritage Palm Beach.
                                </p>
                            </MDBCol>
                            <MDBCol size="6">
                                <h6 className="bold-header">Merits</h6>
                                    <ul>
                                        <li>
                                            "Don Estridge Award", given at Don Estridge High Tech Middle School, recognizing engineering and programming skills. 
                                        </li>
                                        <li>
                                            "Think Award" at State-Level Vex IQ Robotics Competition, taking my team to the World Championships.
                                        </li>
                                        <li>
                                                "CIW Site Development Associate Certificate", completed in middle school.
                                        </li>
                                        <li>
                                                Computer Science track at American Heritage High School.
                                        </li>
                                        <li>
                                                A lead programmer in the Robotics team at American Heritage.
                                        </li>
                                        <li>
                                            Academic Scholarship to American Heritage.
                                        </li>
                                    </ul>
                            </MDBCol>

                        </MDBRow>
                    </VolunteerCard>
                </MDBCol>
                <MDBCol className="pb-4">
                    <VolunteerCard name="Zoe Thevenot" description="Co-Founder" imgsrc={zoeImg} imgsrc1={zoeImgLarger}>
                        <MDBRow>
                            <MDBCol size="6" className="ps-4">
                                <h6 className="align-content-start bold-header">About Me</h6>
                                <p>
                                    Hi, I’m Zoe and I’m one of the co-founders of CodeWrite Academy. I’ve always enjoyed designing the artistic aspects of businesses, organizing fundraisers and programs, and helping a variety of people and causes. This organization gave me the opportunity to pursue my passions. I've known Rishan for 4 years now and when he pitched this idea to me, I knew it was something I was excited to bring to life. In my free time: I love working with kids as a counselor, hanging out with my friends, and organizing fundraisers with my neighbors to raise money for charity.
                                </p>
                            </MDBCol>
                            <MDBCol size="6">
                                <h6 className="bold-header">Merits</h6>
                                    <ul>
                                        <li>
                                            "CIW Site Development Associate Certificate", completed in middle school.
                                        </li>
                                        <li>
                                            Academic Scholarship to American Heritage.
                                        </li>
                                        <li>
                                            Class Award in a Computer Science class. 
                                        </li>
                                    </ul>
                            </MDBCol>

                        </MDBRow>
                    </VolunteerCard>
                </MDBCol>
            </MDBRow>
        </div>
        </div>
    )
}