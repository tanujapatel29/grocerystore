import React from 'react';
import banner1 from '../../assets/images/banner-1.png';
import banner2 from '../../assets/images/banner-2.png';
import banner3 from '../../assets/images/banner-3.png';
import "./banners.css";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from 'react';
function Banners() {


  return (
    <div className='bannersection'>
     <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
                <div className='box'>
                <img src={banner1} className='w-100 transition' />
                <div className='info'>
                <h3 className='transition-4'> 
                Everyday fresh & <br /> 
                Clean with Our <br/>
                Products
              
              </h3>
              <Button className='bg-g ' > Shop now<ArrowForwardIcon className='ms-2'/></Button>
              </div>
             
                </div>
                </div>
                <div className='col'>
             <div className='box'>
             <img src={banner2} className='w-100 transition' />
             <div className='info'>
                <h3 className='transition'> 
                Make your Breakfast <br /> 
                Healthy and Easy
            
              
              </h3>
              <Button className='bg-g ' > Shop now<ArrowForwardIcon className='ms-2'/></Button>
              </div>
              
             </div>
             </div>
             <div className='col'>
             <div className='box'>
             <img src={banner3} className='w-100 transition' />
             <div className='info'>
                <h3 className='transition-4'> 
                The best Organic <br /> 
                Products Online <br/>
              
              
              </h3>
              <Button className='bg-g ' > Shop now<ArrowForwardIcon className='ms-2'/></Button>
              </div>
             
             </div>
             
            </div>
        </div>
            </div>
    </div>
  )
}

export default Banners
