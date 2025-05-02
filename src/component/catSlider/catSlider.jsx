import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./catSlider.css";
import cat14 from '../../assets/images/cat-14.png';
import cat13 from '../../assets/images/cat-13.png';
import cat12 from '../../assets/images/cat-12.png';

import cat11 from '../../assets/images/cat-11.png';
import cat9 from '../../assets/images/cat-9.png';


import cat5 from '../../assets/images/cat-5.png';
import cat4 from '../../assets/images/cat-4.png';
import cat3 from '../../assets/images/cat-3.png';
import cat2 from '../../assets/images/cat-2.png';
import cat1 from '../../assets/images/cat-1.png';


function CatSlider() {
     const[itemBg, setitemBg]=useState([
     ' #f2fce4',
     '#fffceb',
     '#ecffec',
     '#feefea',
     '#fff3eb',
     '#fff3ff',
     '#f2fce4',
     '#feefea',
     '#fffceb',
     '#feefea',


     ])
     const categories = [
      { img: cat13, title: 'Cake & milk', count: '26 items' },
      { img: cat12, title: 'Organic Kiwi', count: '28 items' },
      { img: cat11, title: 'Peach', count: '14 items' },
      { img: cat9, title: 'Red Apple', count: '54 items' },
      { img: cat3, title: 'Snack', count: '56 items' },
      { img: cat1, title: 'Vegetable', count: '72 items' },
      { img: cat2, title: 'Strawberry', count: '36 items' },
      { img: cat4, title: 'Black plum', count: '123 items' },
      { img: cat5, title: 'Custard apple', count: '34 items' },
      { img: cat14, title: 'Coffee & Tea', count: '89 items' },
    ];
    

   var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,

      arrows: true,
   };

   useEffect(() => {
      const items = document.querySelectorAll('.catsliderMain .item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 80); // stagger animation
      });
    }, []);

   return (
      <>
         <div className='catSliderSection'>

            <div className='container-fluid'>
               <h2 className='hd '>Featured categories</h2>
               <Slider {...settings} className='catsliderMain'>
               {categories.map((cat, index) => (
  <div key={index}>
    <div className='item' style={{ backgroundColor: itemBg[index] }}>
      <div className='info'>
        <img src={cat.img} alt={cat.title} />
        <h3>{cat.title}</h3>
        <p>{cat.count}</p>
      </div>
    </div>
  </div>
))}

                  
               </Slider>
            </div>


         </div>
      
      </>
   )
}

export default CatSlider;
