import React from "react";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../assets/images/carousel1.png'
import carousel2 from '../assets/images/carousel2.png'
import carousel3 from '../assets/images/carousel3.png'

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  
  };
  const images = [
   carousel1,carousel2,carousel3,
  ];

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <Box key={index}>
          <img
            src={src}
            style={{ width: '100%', height: '550px' }} 
            alt="banner images"
          />
        </Box>
      ))}
    </Slider>
  );
}
