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

import Image from 'next/image';

const height_100 = {height: "100%"};
const width_auto = {width: "auto"}
const object_fit = {objectFit: 'cover'};

import "./page.module.css";

function VolunteerCard(props)
{
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <MDBCard className="h-90 hover-shadow position-relative">
            <Image className="card-image-top" style={{...object_fit, ...height_100, ...width_auto}} src={props.imgsrc} position='top' />
            <MDBCardBody>
                <MDBCardTitle class="text-center normal-text bold-header">{props.name}</MDBCardTitle>
                <MDBCardText class="text-center normal-text">
                    {props.description}
                </MDBCardText>
                <div className="text-center">
                    <MDBBtn onClick={toggleShow} className="stretched-link">
                        <div className="normal-text">
                            View Bio
                        </div>
                    </MDBBtn>
                </div>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog centered size="xl">
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle className="">{props.name}'s Bio</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody className="p-2">
                                <MDBRow className="">
                                    <MDBCol size='4' className="" style={{ maxHeight: "50vh" }}>
                                        <Image src={props.imgsrc1} alt="Volunteer Card" style={{...height_100, ...width_auto}}></Image>
                                    </MDBCol>

                                    <MDBCol size='8' className="p-3 pe-5">
                                        <div class="d-flex volunteer">
                                                {props.children}
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleShow}>
                                    Close
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </MDBCardBody>
        </MDBCard>
    )
}

export default VolunteerCard;