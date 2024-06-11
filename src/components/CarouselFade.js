import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
//import CarouselImage from 'components/CarouselImage';
import CarouselImage from './CarouselImage';

function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <CarouselImage text="First slide" imageUrl="https://th.bing.com/th/id/R.7c1288d33695fc5bfa4335f896c8295c?rik=jrv7HepHflwfSA&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2018%2f07%2fWatch-Website-Template-6.jpg&ehk=jpxIhCfSLP5V%2bUHRTIYz6uO7mIkhi0GnjurOaT2hi1Q%3d&risl=&pid=ImgRaw&r=01" />
                <Carousel.Caption>
                   
                    <p>Introducing.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage text="Second slide" imageUrl="https://m.media-amazon.com/images/S/aplus-media/vc/7b49ea3e-fe42-4582-9876-6d47564dd382._SR970,300_.jpg" />
                <Carousel.Caption>
                   
                    <p>Introducing.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage text="Third slide" imageUrl="https://www.tata.com/content/dam/tata/images/newsroom/heritage/desktop/titanedge_banner_desktop_1920x1080.jpg" />
                <Carousel.Caption>
                   
                    <p>
                        Introducing.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;