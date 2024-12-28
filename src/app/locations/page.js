import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBRow,
    MDBCol,
    MDBBtn
} from '@/lib/mdb-react-ui-kit';

import Image from 'next/image'
import styles from './../page.module.css'
import rishan_and_kid from '../../../public/BGCDelray/rishan_and_kid.jpg'
import rishan_and_kids_playing_game from '../../../public/BGCDelray/rishan_and_kids_playing_game.jpg'
import rishan_working_on_game from '../../../public/BGCDelray/rishan_working_on_game.jpg'
import zoe_and_kid from '../../../public/BGCDelray/zoe_and_kid.jpg'
import zoe_working_on_building_gamepad from '../../../public/BGCDelray/zoe_working_on_building_gamepad.jpg'
import zoe_working_on_game_2 from '../../../public/BGCDelray/zoe_working_on_game_2.jpg'
import zoe_working_on_game from '../../../public/BGCDelray/zoe_working_on_game.jpg'

export default function Locations()
{
    return (
        <div className="pt-5 pb-5">
            <h1 className="text-center text-blue-400"> Boys and Girls Club Delray Beach</h1>
            <MDBContainer className="flex justify-center">
                <MDBCarousel showControls showIndicators interval={7000} className="w-3/5">
                    <MDBCarouselItem itemId={1} className="active" isActive>
                        <Image src={zoe_and_kid} alt="Zoe working with a kid" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <Image src={rishan_and_kids_playing_game} alt="Rishan and kids playing their games" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <Image src={zoe_working_on_building_gamepad} alt="Zoe working with building a small gamepad" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={4}>
                        <Image src={rishan_working_on_game} alt="Rishan working on game" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={5}>
                        <Image src={zoe_working_on_game} alt="Zoe working on game" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={6}>
                        <Image src={rishan_and_kid} alt="Rishan and Kid" className="d-block w-auto"/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={7}>
                        <Image src={zoe_working_on_game_2} alt="Zoe working on game" className="d-block w-auto"/>
                    </MDBCarouselItem>
                   
                </MDBCarousel>
            </MDBContainer>
        </div>
    )
}