'use client'
import { MDBContainer } from "@/lib/mdb-react-ui-kit"

import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

import desktopPath from '../../../public/DesktopPath.png';

function HowWeWork()
{
    return (
        <>
        <div className="">
            <div className="md:bg-[url('/Empty_Border.png')] w-full flex flex-col justify-content-center pt-24 pb-24 md:pb-4">
                <TypeAnimation className="text-center mx-auto md:leading-normal font-bold w-auto md:w-[32ch] font-mono text-3xl md:text-6xl whitespace-normal md:whitespace-nowrap overflow-auto md:overflow-hidden"
                    sequence={[
                        "Project-based learning made fun."
                    ]}
                />
                <p className="text-center text-2xl pt-5 text-slate-600">
                    With project-based learning, students get to use their newly-learned skills in real-world scenarios, while keeping it fun.
                </p>
            </div>
        </div>
            <div className="flex flex-col pt-4 pb-32">

                {/* <div className="mb-10 h-96 w-full lg:w-full lg:h-[323.3px] bg-auto bg-[url('/MobilePath.png')] lg:bg-[url('/DesktopPath.png')]"> </div> */}

                <img className="w-full content-[url('/MobilePath.png')] lg:content-[url('/DesktopPath_new1.png')]" />


                <p className="text-2xl text-center mt-5">
                    Starting with Scratch, students learn the basics of programming with an interactive drag-and-drop programming language.
                </p>
                <p className="text-2xl text-center">
                    Students then move onto Python, where students learn the basics of writing programs, as opposed to Scratch's drag-and-drop mechanics.
                </p>
                <p className="text-2xl text-center">
                    Finally, students move onto Unity, where they get to create games in the popular game engine, paired with C#, a programming language developed by Microsoft.
                </p>
            </div>
            <MDBContainer className="flex flex-col justify-content-center pt-4 pb-32 mx-auto">
                <h1 className="font-bold text-center">More languages Coming Soon</h1>
                <p className="text-lg text-center text-xl pt-3">
                    Upcoming planned tracks include introductory C++, basic Web Development, and more! Stay tuned. 
                </p>
            </MDBContainer>
    </>
    );
}

export default HowWeWork;