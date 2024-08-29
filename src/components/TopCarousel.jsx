import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NokiaG50 from '../assets/Mobiles/NokiaG50.png';
import Iphone_15_pro_max from '../assets/Mobiles/Iphone_15_pro_max.png';
import Marshall from '../assets/Accessoires/Marshall.png';
import TopCarouselStyle from '../css/TopCarouselStyle.css';



function TopCarousel() {
  return (
    <div>
    <Carousel data-bs-theme="dark" className='top-carousel'>
      <Carousel.Item >
        <img
          
          className="Nokia-G50"
          src={NokiaG50}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h1>Nokia G50</h1> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Iphone15"
          src={Iphone_15_pro_max}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Iphone 15 pro max</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Marshall"
          src={Marshall}
          alt="Third slide"
          
        />
        <Carousel.Caption>
          <h1>Casque Marshall</h1>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default TopCarousel;