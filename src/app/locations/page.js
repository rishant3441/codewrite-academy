'use client'
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
// Delray Pictures
import rishan_and_kid from '../../../public/BGCDelray/rishan_and_kid.jpg'
import rishan_and_kids_playing_game from '../../../public/BGCDelray/rishan_and_kids_playing_game.jpg'
import rishan_working_on_game from '../../../public/BGCDelray/rishan_working_on_game.jpg'
import zoe_and_kid from '../../../public/BGCDelray/zoe_and_kid.jpg'
import zoe_working_on_building_gamepad from '../../../public/BGCDelray/zoe_working_on_building_gamepad.jpg'
import zoe_working_on_game_2 from '../../../public/BGCDelray/zoe_working_on_game_2.jpg'
import zoe_working_on_game from '../../../public/BGCDelray/zoe_working_on_game.jpg'

// Boca Pictures
import kids_working2 from '../../../public/BGCBoca/kids_working2.jpg'
import kids_working1 from '../../../public/BGCBoca/kids_working1.jpg'
import zoe_teaching_on_board from '../../../public/BGCBoca/zoe_teaching_on_board.jpg'
import boy_playing_game from '../../../public/BGCBoca/boy_playing_game.jpg'
import boys_playing_game from '../../../public/BGCBoca/boys_playing_game.jpg'
import girls_playing_game from '../../../public/BGCBoca/girls_playing_game.jpg'
import more_girls_playing_games from '../../../public/BGCBoca/more_girls_playing_games.jpg'



import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
export default function Locations()
{
    const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1500 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1500, min: 768 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 100 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
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
                                <h1 className='mb-3 font-bold text-6xl'>Our Locations</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="pt-5 pb-5">
                <h1 className="text-center text-blue-400"> Boys and Girls Club Delray Beach</h1>
                <MDBContainer className="w-11/12 flex h-auto justify-content-center max-w-screen-2xl">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="w-full"
                        draggable
                        focusOnSelect={false}
                        infinite
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots
                        autoPlay={true}
                        slidesToSlide={1}
                        swipeable
                        ssr={false}
                        >
                        <Image src={zoe_working_on_game_2} alt="Zoe working on game" className="d-block w-auto px-2"/>
                        <Image src={zoe_and_kid} alt="Zoe working with a kid" className="d-block w-auto px-2"/>
                        <Image src={rishan_and_kids_playing_game} alt="Rishan and kids playing their games" className="d-block w-auto px-2"/>
                        <Image src={zoe_working_on_building_gamepad} alt="Zoe working with building a small gamepad" className="d-block w-auto px-2"/>
                        <Image src={rishan_working_on_game} alt="Rishan working on game" className="d-block w-auto px-2"/>
                        <Image src={zoe_working_on_game} alt="Zoe working on game" className="d-block w-auto px-2"/>
                        <Image src={rishan_and_kid} alt="Rishan and Kid" className="d-block w-auto px-2"/>
                    </Carousel>
                </MDBContainer>
                <h1 className="pt-5 text-center text-blue-400"> Boys and Girls Club Boca Raton</h1>
                <MDBContainer className="w-11/12 flex h-auto justify-content-center max-w-screen-2xl">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="w-full"
                        draggable
                        focusOnSelect={false}
                        infinite
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots
                        autoPlay={true}
                        slidesToSlide={1}
                        swipeable
                        ssr={false}
                        >
                        <Image src={boy_playing_game} alt="Boy plays game" className="d-block w-auto px-2"/>
                        <Image src={zoe_teaching_on_board} alt="Zoe teaches kid on smartboard" className="d-block w-auto px-2"/>
                        <Image src={girls_playing_game} alt="2 girls playing game" className="d-block w-auto px-2"/>
                        <Image src={kids_working1} alt="Zoe teaching girl while others work" className="d-block w-auto px-2"/>
                        <Image src={boys_playing_game} alt="Boys plays game" className="d-block w-auto px-2"/>
                        <Image src={kids_working2} alt="Zoe teaching girl while others work" className="d-block w-auto px-2"/>
                        <Image src={more_girls_playing_games} alt="3 girls playing game" className="d-block w-auto px-2"/>
                    </Carousel>
                </MDBContainer>
            </div>
        </div>
    )
}