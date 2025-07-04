import React, { useState } from 'react';
import Slider from './slider/slider';
import './index.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CatSlider from '../../component/catSlider/catSlider';
import Banners from '../../component/banners/banners';
import homeb from '../../assets/images/homeb.jpg';
import banner9 from '../../assets/images/banner9.png'
import best from '../../assets/images/best.jpg';
import Product from '../../component/product/product';
import Topproducts from '../../component/topproducts/topproducts';
import Newsletter from '../../component/newsletter/newsletter';
import Productslider from './productslider/productslider';
import Footer from '../../component/footer/Footer';
function Index() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const categories = ['All', 'Milk & Dairies', 'Coffees & teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits'];
  const daily = ['Featured', 'Popular', 'New added'];
  const allCategoryProducts = {
    All: Array.from({ length: 35 }, (_, i) => ({
      id: i + 1,
      badge: ['Hot', 'New', 'Sale', ''][i % 4], // cycle through badges
    })),
    'Milk & Dairies': Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      badge: i % 3 === 0 ? 'New' : '',
    })),
    'Coffees & teas': Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      badge: i % 2 === 0 ? 'Hot' : '',
    })),
    'Pet Foods': Array.from({ length: 18 }, (_, i) => ({
      id: i + 1,
      badge: i % 4 === 0 ? 'Sale' : '',
    })),
    'Meats': Array.from({ length: 22 }, (_, i) => ({
      id: i + 1,
      badge: i % 5 === 0 ? 'Hot' : '',
    })),
    'Vegetables': Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      badge: i % 3 === 0 ? 'New' : '',
    })),
    'Fruits': Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      badge: i % 2 === 0 ? 'Sale' : '',
    })),
  };



  // Dummy data with badges (example)



  // 🧪 Dummy product array to simulate 35 products


  // Pagination logic
  const selectedProducts = allCategoryProducts[selectedCategory] || [];
  const totalPages = Math.ceil(selectedProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = selectedProducts.slice(start, end);


  // Function to render 2 rows of 5 products each
  const renderProductRows = () => {
    const rows = [];
    for (let i = 0; i < paginatedProducts.length; i += 5) {
      rows.push(
        <div className="productRow" key={i}>
          {paginatedProducts.slice(i, i + 5).map((product) => (
            <div className="item" key={product.id}>
              <Product badgeLabel={product.badge} />
            </div>
          ))}

        </div>
      );
    }
    return rows;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      <Slider />
      <CatSlider />
      <Banners />


      <section className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center  justify-content-between'>
            <h2 className='hd mb-0 mt-0'>Popular Products</h2>
            <ul className='list list-inline mb-0 fliterTab'>
              {categories.map((category) => (
                <li className="list-inline-item" key={category}>
                  <Button onClick={() => handleCategoryClick(category)} disableRipple>
                    <Link
                      className={`text-link ${selectedCategory === category ? 'active' : ''}`}
                      to="#"
                    >
                      {category}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          {/* Render 10 products in 2 rows */}
          {renderProductRows()}

          {/* Pagination buttons */}
          <div className="pagination mt-4 text-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                variant={currentPage === index + 1 ? 'contained' : 'outlined'}
                className="mx-1"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>

      </section>


      <section className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center  justify-content-between'>
            <h2 className='hd mb-0 mt-0'>Daily Best Sell</h2>
            <ul className='list list-inline mb-0 fliterTab'>
              {daily.map((item) => (
                <li className="list-inline-item" key={item}>
                  <Button onClick={() => handleCategoryClick(item)} disableRipple>
                    <Link
                      className={`text-link ${selectedCategory === item ? 'active' : ''}`}
                      to="#"
                    >
                      {item}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>


          </div>


          <br>
          </br><br></br>

          <div className='row '>
            <div className='col-md-3 '>
              <img src={homeb} className='w-100 ' />
            </div>
            <div className='col-md-9'>
              <Productslider />
            </div>
          </div>


        </div>



      </section>
      <section className='topProductsSection'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h3>Top Selling</h3>
              <br />

              < Topproducts /><br />
              < Topproducts /><br />
              < Topproducts />
            </div>
            <div className='col'>

              <h3>Trending Products</h3>
              <br />
              < Topproducts /><br />
              < Topproducts /><br />
              < Topproducts />
            </div>
            <div className='col'>

              <h3>Recently added</h3>
              <br />
              < Topproducts /><br />
              < Topproducts /><br />
              < Topproducts />
            </div>
            <div className='col'>

              <h3>Top Rated</h3>
              <br />
              < Topproducts /><br />
              < Topproducts /><br />
              < Topproducts />
            </div>
          </div>
        </div>
      </section>

      <section className='newsLetterSection'>

        <div className='container-fluid'>
          <div className='box d-flex align-items-center'>
            <div className='info'>
            <h1 className='mb-3'>
              Stay home & get your daily<br/>
needs from our shop
            </h1>
            <p className='mb-65'>Start You'r Daily Shopping with Nest Mart</p>
            <br/> <Newsletter/>
            </div>
            <div className='img'>
               <img src={banner9} className='w-100' />
                      
            </div>
          </div>
        </div>
      </section>


  <Footer/>
    </div>
  )
}

export default Index;
