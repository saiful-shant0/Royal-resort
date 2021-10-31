import React from 'react';
import { Carousel } from 'react-bootstrap';
import carosel1 from '../../images/banner/banner1.jpg'
import carosel2 from '../../images/banner/banner2.jpg'
import carosel3 from '../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={carosel1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={carosel2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carosel3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;