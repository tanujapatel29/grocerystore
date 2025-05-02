import React from 'react';
import Slider from "react-slick";
import './slider.css';
import slider1 from '../../../assets/images/slider1.png';
import slider2 from '../../../assets/images/slider2.png';
import Fade  from '@mui/material/Fade';
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true
  };
  return (
    <section className='homeSlider'>
      <div className='container-fluid position-relative '>
        <Slider {...settings} className='homeslidermain'>
          <div className='item'>
            <img src={slider1} className='w-100' />
            <div className='info'>
              <h1 className='mb-4'>
                Don't miss amazing<br />
                grocery deals
              </h1>
              <p className='mb-65'> Sign up for daily newsletter</p>
            </div>
          </div>
          <div className='item'>
            <img src={slider2} className='w-100' />
            <div className='info'>
              <h1 className='mb-3'>
                Fresh vegetables<br />
                Big discount

              </h1>
              <p className='mb-65'> Save upto 50% off on your first order</p>
            </div>
          </div>

        </Slider>

        <div className='newsletterBanner'>
        <SendRoundedIcon />
          <input type='email' placeholder='your email address' tabIndex={0} />
          <Button className='bg-g ' > Subscribe</Button>
        </div>
      </div>
    </section>


  )
}

export default SliderComponent;
