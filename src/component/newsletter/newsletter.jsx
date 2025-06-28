import React from 'react';
import './newsletter.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
function Newsletter() {
  return (
    <div>
      <div className='newsletterBanner'>
        <SendRoundedIcon />
          <input type='email' placeholder='your email address' tabIndex={0} />
          <Button className='bg-g ' > Subscribe</Button>
        </div>
    </div>
  )
}

export default Newsletter;
