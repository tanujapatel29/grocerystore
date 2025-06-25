import React from 'react'
import Slider from "react-slick";
import Product from '../../../component/product/product';
import './productslider.css';
function Productslider() {
    var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:3000,
    arrows: true, 
    
  };
   const products = [1, 2, 3, 4];
  return (
    <div>
     <Slider {...settings} className='homeslidermain'>
  {products.map((item, index) => (
    <div key={index} className='product-slide'>
      <Product />
    </div>
  ))}
</Slider>


    </div>
  )
}

export default Productslider
