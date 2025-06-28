import React from 'react'
import './topproducts.css';
import thumbnail from '../../assets/images/thumbnail.jpg';
import Rating from '@mui/material/Rating';
function Topproducts() {
  return (
    <div className=' topSelling_box'>
      
      
      <div className='row'>
        <div className='col-md-4'>
          <img src={thumbnail} className='w-100 ' />
        </div>

        <div className='col-md-6'>

          <h6>
            Nestle Original Coffee-Mate Coffee Creamer
          </h6>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          <div className='d-flex align-items-center '>
            <span className='price text-success font-weight-bold'>$28.5 </span> <span className='oldPrice'>$32.40</span>
          </div>


        </div>


      </div>








      </div>



    
    
  )
}

export default Topproducts;
