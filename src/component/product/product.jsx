
import React from 'react';
import './product.css';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import Tooltip from '@mui/material/Tooltip';
function Product(  {badgeLabel} ) {
  const badgeColors = {
    Hot: 'red',
    New: 'green',
    Sale: 'orange',
  };
  const badgeColor = badgeColors[badgeLabel] || 'blue'; // Default to 'blue' if no match


  return (
    <div className='productThub transition '>
      {badgeLabel && <span className='badge' style={{ backgroundColor: badgeColor }}>{badgeLabel}</span>} {/* Apply dynamic color */}
      <Link>
        <div className='imgWrapper cursor'>
          <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
            className='w-100 transition' />
          <div className='overlay transition' >
            <ul className='list list-inline mb-0'>
              <li className='list-inline-item'>
                <Tooltip title="Add to wishlist" classes={{ tooltip: 'tooltip-success' }}>
                  <a className='cursor transition'><FavoriteBorderOutlinedIcon /></a>
                </Tooltip>
              </li>
              <li className='list-inline-item' >
                <Tooltip title="Compare" classes={{ tooltip: 'tooltip-success' }}>
                  <a className='cursor transition'><CompareArrowsOutlinedIcon /></a>
                </Tooltip>
              </li>
              <li className='list-inline-item'>
                <Tooltip title="Quick view" classes={{ tooltip: 'tooltip-success' }}>
                  <a className='cursor transition'><RemoveRedEyeOutlinedIcon /></a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className='info'>
        <span className='d-block catName cursor'>Snack</span>
        <h4 className='title cursor'><Link className='text-black' >Seeds of change organic Quinoa, Brown, &red Rice</Link></h4>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        <span className='brand d-block'>By <Link className='text-success cursor'>NestFood</Link></span>
        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className='d-flex align-items-center '>
            <span className='price text-success font-weight-bold'>$28.5 </span> <span className='oldPrice'>$32.40</span>
          </div>
          <Button className=' ml-auto cursor transition'><AddShoppingCartIcon />Add</Button>
        </div>

      </div>

    </div>
  )
}

export default Product;
