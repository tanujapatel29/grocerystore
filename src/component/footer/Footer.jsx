import React from 'react';
import './footer.css';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Icon1 from '../../assets/images/icon1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-4.svg';
import Icon5 from '../../assets/images/icon-5.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';

import googlePlay from '../../assets/images/google-play.jpg';
import appStore from '../../assets/images/app-store.jpg';
import paymentMethod from '../../assets/images/payment-method.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footerWrapper'>
      <div className='footerBoxes'>
        <div className='container-fluid'>


          <div className='row'>
            <div className="col">

              <div className='box d-flex align-items-center w-100'>
                <span><img src={Icon1} className='img' /></span>
                <div className='info'>
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Icon2} className='img' /></span>
                <div className='info'>
                  <h4>Free delivery</h4>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Icon3} className='img' /></span>
                <div className='info'>
                  <h4>Great daily deal</h4>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Icon4} className='img' /></span>
                <div className='info'>
                  <h4>Wide assortment</h4>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Icon5} className='img' /></span>
                <div className='info'>
                  <h4>Easy returns</h4>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>



        </div>



      </div>


      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 part1 '>
              <Link to='/' ><img src={Logo} /></Link>
              <p>Awesome grocery store website template</p>
              <br />
              <p><LocationOnIcon className='icon' /><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
              <p><CallIcon className='icon' /><strong>Call Us:</strong> (+91) - 540-025-124553</p>
              <p><MailIcon className='icon' /><strong>Email:</strong>sale@Nest.com</p>
              <p><AccessTimeIcon className='icon' /><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
            </div>

            <div className='col-md-6 part2'>
              <div className='row'>
                <div className='col'>
                  <h3 >Company</h3>
                  <ul class="footer-list mb-sm-5 mb-md-0">
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Delivery Information</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Support Center</Link></li>
                    <li><Link to="#">Careers</Link></li>
                  </ul>
                </div>


                <div className='col'>
                  <h3 >Account</h3>
                  <ul class="footer-list mb-sm-5 mb-md-0">
                    <li><Link to="#">Sign In</Link></li>
                    <li><Link to="#">View Cart</Link></li>
                    <li><Link to="#">My Wishlist</Link></li>
                    <li><Link to="#">Track My Order</Link></li>
                    <li><Link to="#">Help Ticket</Link></li>
                    <li><Link to="#">Shipping Details</Link></li>
                    <li><Link to="#">Compare products</Link></li>
                  </ul>
                </div>

                <div className='col'>
                  <h3 >Corporate</h3>
                  <ul class="footer-list mb-sm-5 mb-md-0">
                    <li><Link to="#">Become Link Vendor</Link></li>
                    <li><Link to="#">Affiliate Program</Link></li>
                    <li><Link to="#">Farm Business</Link></li>
                    <li><Link to="#">Farm Careers</Link></li>
                    <li><Link to="#">Our Suppliers</Link></li>
                    <li><Link to="#">Accessibility</Link></li>
                    <li><Link to="#">Promotions</Link></li>
                  </ul>
                </div>

                <div className='col'>
                  <h3 >Popular</h3>
                  <ul class="footer-list mb-sm-5 mb-md-0">
                    <li><Link to="#">Milk &amp; Flavoured Milk</Link></li>
                    <li><Link to="#">Butter and Margarine</Link></li>
                    <li><Link to="#">Eggs Substitutes</Link></li>
                    <li><Link to="#">Marmalades</Link></li>
                    <li><Link to="#">Sour Cream and Dips</Link></li>
                    <li><Link to="#">Tea &amp; Kombucha</Link></li>
                    <li><Link to="#">Cheese</Link></li>
                  </ul>
                </div>




              </div>

            </div>

            <div className='col-md-3 part3'>
              <h3>Install App</h3><br />
              <p>From App Store or Google Play</p>
              <div className='d-flex'>
                <Link to={''}><img src={appStore} width={150} /></Link>
                <Link to={''}><img src={googlePlay} className="mx-2" width={150} /></Link>

              </div>
              <br />
              <p>Secured Payment Gateways</p>
              <Link to={''}><img src={paymentMethod} width={180} /></Link>

            </div>
          </div>

          <hr />
          <div className='row lastString'>
            <div className='col-md-3'>
              <p>© 2025, Grocery Ecommerce
                All rights reserved</p>
            </div>
            < div className='col-md-6 d-flex'>
              <div className='m-auto d-flex align-items-center'>


                <div className='phNo d-flex align-items-center mx-5'>
                  <span><PhoneInTalkIcon /></span>
                  <div className='info ml-3'>
                    <h3 className='text-success'>1900-6666</h3>
                    <p className='mb-0'>Working 8:00 - 22:00 </p>
                  </div>


                </div>

                <div className='phNo d-flex align-items-center mx-5'>
                  <span><PhoneInTalkIcon /></span>
                  <div className='info ml-3'>
                    <h3 className='text-success'>1900-8888</h3>
                    <p className='mb-0'>24/7 Support Center</p>
                  </div>


                </div>
              </div>




            </div>

            <div className='col-md-3 part3'>
              <div className=' m-auto d-flex align-items-center gap-3'>
                
                <h5 className='mb-0'>Follow Us</h5>
                <ul className=' d-flex list list-inline gap-1 p-0 m-0'>
                  <li className='list-inline-item'>
                    <Link to={''}><FacebookIcon/></Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to={''}><TwitterIcon/></Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to={''}><InstagramIcon/></Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to={''}><YouTubeIcon/></Link>
                  </li>
                  
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Footer;
