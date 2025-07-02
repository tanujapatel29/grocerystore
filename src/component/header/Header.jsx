import React, { useEffect, useState, useRef } from 'react';

import './header.css';
import logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectdrops/Select';
import axios from 'axios';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Nav from './nav/nav';

function Header() {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const headerRef = useRef();
  const [categories, setcategories] = useState([

    'milk',
    'fresh fruit',
    'bread',
    'vegetable']);

  // Safely extract country names and filter out any null or undefined entries

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add('fixed');
      } else {
        headerRef.current.classList.remove('fixed');
      }
    })
  }, [])
  return (
    <div >
      <div className='headerWrapper' ref={headerRef}>
        <header>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-2'>
                <img src={logo} className='logo' />

              </div>

              <div className='col-sm-5 d-flex align-items-center'>
                <div className='headerSearch '>
                  <Select data={categories} placeholder={'All categories'} />

                  <div className='searchBar'>
                    <input type='text' placeholder='Search for items..' />
                    <SearchIcon className='searchIcons cursor' />

                  </div>

                </div>

              </div>
              <div className='col-sm-5 d-flex align-items- justify-content-end '>
                <div className='ml-auto'>
                  { /*<div className='col-sm-5'>
                                  <div className='countrywrapper'>
                                  <Select  data={countryList}  placeholder={"your Location"} /></div>
                              </div> */}
                  <ul className='list list-inline mb-0 headerTabs'>
                    <li className='list-inline-item'>
                      <span><CompareOutlinedIcon />
                        <div className='badge bg-success rounded-circle'>3</div> Compare</span>
                    </li>
                    <li className='list-inline-item'>
                      <span><FavoriteBorderOutlinedIcon />
                        <div className='badge bg-success rounded-circle'>2</div> Wishlist</span>
                    </li>
                    <li className='list-inline-item'>
                      <span><ShoppingCartOutlinedIcon />
                        <div className='badge bg-success rounded-circle'>5</div>Cart</span>
                    </li>

                    <li className='list-inline-item' >

                      <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                        <div>
                          <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>

                            <PermIdentityOutlinedIcon /> Account</span>

                          {

                            isOpenDropDown !== false &&
                            <ul className='dropDownMenu'>
                              <li><Button className='align-items-center'><PermIdentityOutlinedIcon />My account</Button></li>
                              <li><Button><PinDropIcon />Order Tracking</Button></li>
                              <li><Button><CardGiftcardIcon />My Voucher</Button></li>
                              <li><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></li>
                              <li><Button><SettingsIcon />Setting</Button></li>
                              <li><Button><LogoutIcon />Sign out</Button></li>

                            </ul>
                          }
                        </div>

                      </ClickAwayListener>



                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>


        </header >
        <Nav />
      </div >
    </div>
  )
}

export default Header;