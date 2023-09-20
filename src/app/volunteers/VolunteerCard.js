'use client'

import React, { useState } from 'react';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalFooter
} from '@/lib/mdb-react-ui-kit';

import Button from 'react-bootstrap/Button'

import Image from 'next/image';

const height_100 = {height: "100%"};
const width_auto = {width: "auto"}
const object_fit = {objectFit: 'cover'};

import "./page.module.css";

function VolunteerCard(props)
{
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
    if (typeof window === "undefined") {
return (<></>);
}

    return (
        <MDBCard className="h-full hover:shadow-md transition duration-300 position-relative rounded-md">
            <Image className="card-image-top h-full w-auto object-cover rounded-t-md" src={props.imgsrc} alt={props.name} position='top' />
            <MDBCardBody>
                <MDBCardTitle className="text-center normal-text bold-header">{props.name}</MDBCardTitle>
                <MDBCardText className="text-center normal-text">
                    {props.description}
                </MDBCardText>
                <div className="text-center">
                    <Button onClick={toggleShow} className="">
                        <div className="normal-text">
                            View Bio
                        </div>
                    </Button>
                </div>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog centered size="xl">
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle className="font-bold">{props.name}'s Bio</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody className="p-2">
                                <MDBRow className="">
                                    <div className="col-12 col-md-4" style={{ maxHeight: "50vh" }}>
                                        <Image src={props.imgsrc1} alt={props.name} className="rounded object-cover w-auto h-full md:h-auto md:w-full mx-auto"></Image>
                                    </div>

                                    <div className="col-12 col-md-8 p-3 pe-5">
                                        <div class="d-flex volunteer">
                                                {props.children}
                                        </div>
                                    </div>
                                </MDBRow>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <Button color='secondary' onClick={toggleShow}>
                                    Close
                                </Button>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </MDBCardBody>
        </MDBCard>
    )
}

export default VolunteerCard;