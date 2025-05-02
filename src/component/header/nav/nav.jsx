import React from 'react';
import { Button } from '@mui/material';
import './nav.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { Link } from 'react-router-dom';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useState } from 'react';

import ClickAwayListener from '@mui/material/ClickAwayListener';

function Nav() {


  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (

    <div className='nav d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row flex-nowrap align-items-center'>
          <div className='col-sm-3 part1'>
            <Button className=' text-white catTab '><Grid3x3Icon />Browse All Categories<ExpandMoreIcon /></Button>
          </div>

          <div className='col-sm-7 part2'>
            <ul className='list list-inline mb-0 '>
              <li className='list-inline-item'>
                <Button ><Link className='text-black' > Home </Link></Button>
              </li>
              <li className='list-inline-item '>
                <Button text-white><Link className='text-black'>About</Link></Button>
              </li>
              <li className='list-inline-item'>
                <Button text-white><Link className='text-black'>Shop </Link></Button>
              </li>
              <li className='list-inline-item'>
                <Button><Link className='text-black'>Vendors </Link></Button>
              </li>
              <li className='list-inline-item'>
                <div className="dropdown-wrapper position-relative">
                  <Button><Link className='text-black'>Mega Menu </Link></Button>
                  <div className='dropDownmenu'>
                    <ul>
                      <li><Button ><Link to="/about" className='text-black'>home</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Contact Me</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>My account</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Login</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'> us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Login</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>hello</Link></Button></li>
                    </ul>

                  </div>
                </div>


              </li>
              <li className='list-inline-item'>
                <Button><Link className='text-black'>Blog </Link></Button>
              </li>
              <li className='list-inline-item'>
                <div className="dropdown-wrapper position-relative">
                  <Button className='text-black list-inline-item'><Link className='text-black'>Pages</Link></Button>

                  <div className='dropDownmenu'>
                    <ul>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Contact</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>My account</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Login</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>Login</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                      <li><Button ><Link to="/about" className='text-black'>About us</Link></Button></li>
                    </ul>

                  </div>
                </div>
              </li>
              <li className='list-inline-item'>
                <Button><Link className='text-black'>Contact</Link></Button>
              </li>
            </ul>

          </div>

          <div className='col-sm-2 part3 d-flex align-item-center'>
            <div className='phNo d-flex align-items-center ml-auto'>
              <span><PhoneInTalkIcon /></span>
              <div className='info ml-3'>
                <h3 className='text-success'>1900-8888</h3>
                <p className='mb-0'>24/7 Support Center</p>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>



  )
}

export default Nav;
