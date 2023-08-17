'use client'
import Image from 'next/image'
import styles from './page.module.css'

import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
} from '@/lib/mdb-react-ui-kit';

import pythonLogo from '../../public/PythonLogo.png'
import scratchLogo from '../../public/ScratchLogo.png'
import unityLogo from '../../public/UnityLogo.png'
import zoe from '../../public/ZoeThevenot_square.jpg'
import rishan from '../../public/RishanThangaraj_square.jpg'

const width_50 = {width: "50%"};
const width_30 = {width: "30%"};
const height_auto = {height:"auto"}


function Home() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'
                    alt='...'
                >
                    <h1>Learn</h1>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                    alt='...'
                >
                    <h1>Create</h1>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg'
                    alt='...'
                >
                    <h1>Explore</h1>
                </MDBCarouselItem>
            </MDBCarousel>
            <MDBContainer>
                <MDBRow className="pt-4">
                    <h1 className="text-center">Teaching Kids Programming</h1>
                </MDBRow>
                <MDBRow>

                    <MDBContainer className="pt-4 ps-2 pe-2" breakpoint="md">
                        <MDBRow className='gy-5 pb-4'>
                            <MDBCol md="4" className="gy-5 text-center">
                                <Image src={scratchLogo} alt="Scratch Logo" style={{...width_50, ...height_auto}} />
                            </MDBCol>
                            <MDBCol md="4" className="gy-5 text-center">
                                <Image src={unityLogo} alt="Unity Logo" style={{...width_50, ...height_auto}}/>
                            </MDBCol>
                            <MDBCol md="4" className="gy-5 text-center">
                                <Image src={pythonLogo} alt="Python Logo" style={{...width_50, ...height_auto}} />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </MDBRow>
            </MDBContainer>
            <MDBContainer className="maxwidth100 w-100 m-0 px-auto pt-5 ps-5 pb-5 pe-0 background-hp" breakpoint='xxl' style={{maxHeight: "40vh"}}>
                <MDBRow>
                    <MDBCol size="6" className="">
                        <h1>Meet the Team</h1>
                        <p className="homepage pt-4"> Our volunteer team composed of our co-founders and coding tutors will help each student individually, tailoring the lessons to them. All of the volunteers have a wide range of practice in various coding languages which provide unique lessons. We&apos;re excited to share our programming knowledge and help you learn!

                        </p>
                    </MDBCol>
                    <MDBCol size="6" className="pb-0 m-0">
                                <div className="pt-2 text-center">
                                    <Image src={rishan} className="pe-3" style={{...width_30, ...height_auto}}/>
                                    <Image src={zoe} className="pe-3" style={{...width_30, ...height_auto}}/>
                                </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    );
}

export default Home;