'use client'
import Image from 'next/image'
import styles from './page.module.css'

import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from '@/lib/mdb-react-ui-kit';

import pythonLogo from '../../public/PythonLogo.png'
import scratchLogo from '../../public/ScratchLogo.png'
import unityLogo from '../../public/UnityLogo.png'
import zoe from '../../public/ZoeThevenot_square.jpg'
import rishan from '../../public/RishanThangaraj_square.jpg'
import front_page1 from '../../public/front_page1.jpg'
import front_page2 from '../../public/front_page2.jpg'

const width_50 = {width: "50%"};
const width_30 = {width: "30%"};
const height_auto = {height:"auto"}


function Home() {
    return (
        <div>
            <div className="z-0 absolute inset-0 -bottom-18 md:bottom-1 bg-bottom bg-no-repeat bg-slate-50 beams" style={{top:'6.6rem'}}>
                <div className="absolute inset-0 heropattern-graphpaper-slate-200 forefront">

            </div>
        </div>
            <MDBContainer className="inset-0" >

                <MDBContainer className="relative max-w-5xl mx-auto pt-8 sm:pt-28 lg:pt-32 mb-48 md:mb-64 lg:mb-0">
                    <div>
                        <h1 className="text-3xl md:text-6xl text-center font-extrabold">Learning programming in a fun, free way.</h1>
                    </div>
                    <div>
                        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">A volunteer-led organization powered by dedicated high school student tutors with an in-depth knowledge of programming, ready to teach kids through various fun learning activities.
</p>
                    </div>
                </MDBContainer>
                <MDBRow>

                    <MDBContainer className="pt-0 md:pt-48 ps-0 pe-0 md:ps-2 md:pe2 d-flex mb-32 lg:!mb-8 justify-items-center justify-self-center" breakpoint="xs">
                        <MDBRow className='gx-0 md:gx-5 gy-1 md:gy-5 pb-4 justify-center flex flex-row z-1'>
                            <MDBCol className="md:gy-5 d-flex justify-items-center justify-center justify-self-center">
                                <Image src={scratchLogo} alt="Scratch Logo" className="flex w-1/3 md:w-1/2 h-auto justify-center justify-self-center" />
                            </MDBCol>
                            <MDBCol className="md:gy-5 d-flex justify-items-center justify-center justify-self-center">
                                <Image src={unityLogo} alt="Unity Logo" className="flex w-1/3 md:w-1/2 h-auto"/>
                            </MDBCol>
                            <MDBCol className="md:gy-5 d-flex justify-items-center justify-center justify-self-center">
                                <Image src={pythonLogo} alt="Python Logo" className="flex w-1/3 md:w-1/2 h-auto"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </MDBRow>
            </MDBContainer>

            <MDBContainer className="d-flex flex-col justify-center pt-5 mt-20 mb-48 md:!mb-20" style={{height: "25vh"}}>
                <h1 className="text-4xl font-extrabold text-center">"Normal learning methods aren't engaging enough."</h1>
                <figure>
                    <blockquote>
                        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
                            As a self-taught programmer myself, I've endured countless hours of trying to learn through conventional methods,
                            but learned that I can't keep myself focused on the task at hand: learning to program. With this organization, I aim
                            to remedy that.
                        </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img
                            src="/RishanThangaraj_square.jpg"
                            alt=""
                            className="w-14 h-14 rounded-full"
                            loading="lazy"
                            decoding="async"
                        />
                        <div>
                            <div className="text-slate-900 font-semibold">Rishan Thangaraj</div>
                            <div className="mt-0.5 text-sm leading-6">Co-Founder of CodeWrite Academy</div>
                        </div>
                    </figcaption>
                </figure>

            </MDBContainer>

            <MDBContainer className="maxwidth100 w-100 mb-96 lg:mb-8 md:mb-32 px-auto pt-5 md:!ps-5 pb-5 pe-0 background-hp" breakpoint='xxl' style={{maxHeight: "80vh"}}>
                <MDBRow className="gap-9"> 
                    <MDBCol size='md' className="justify-content-end flex">
                        <Image alt="Putting together a small gamepad" src={front_page1} className="rounded-sm xl:max-w-[36rem] lg:max-w-[14rem] object-contain h-auto flex"/>
                    </MDBCol>
                    <MDBCol size='md' className="flex justify-content-start">
                        <Image alt="Programming Games" src={front_page2} className="rounded-sm xl:max-w-[36rem] lg:max-w-[14rem] object-contain h-auto flex"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className="maxwidth100 w-100 mb-80 lg:mb-8 md:mb-32 px-auto pt-5 md:!ps-5 pb-5 pe-0 background-hp" breakpoint='xxl' style={{maxHeight: "72vh"}}>
                <MDBRow className="w-screen">
                    <div className="col-12 col-md-6 p-3 md:p-5">
                        <h1 className="font-extrabold text-center md:!text-left">Meet the Team</h1>
                        <div className="homepage pt-4 sm:pt-2 text-slate-800"> Our volunteer team composed of our co-founders and coding tutors will help each student individually, tailoring the lessons to them. All of the volunteers have a wide range of practice in various coding languages which provide unique lessons. We&apos;re excited to share our programming knowledge and help you learn!

                        </div>
                        <div className="mt-3 md:mt-5 text-center md:text-left">
                            <a href="/volunteers" className="text-blue-500 text-xl">Check out our volunteers!</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-0 m-0 d-flex justify-end pr-0 md:pr-5">
                                <div className="pt-2 flex lg:justify-end me-5 lg:mr-5 w-full">
                                    <Image alt="Rishan Thangaraj" src={rishan} className="rounded-lg align-middle me-3 w-1/2 xl:max-w-[18rem] lg:max-w-[14rem] object-contain h-auto justify-content-end flex"/>
                                    <Image alt="Zoe Thevenot"     src={zoe} className="rounded-lg align-middle w-1/2 xl:max-w-[18rem] lg:max-w-[14rem] h-auto object-contain justify-content-end flex"/>
                                </div>
                    </div>
                </MDBRow>
            </MDBContainer>
        </div>

    );
}

export default Home;