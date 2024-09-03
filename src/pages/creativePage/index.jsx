// CreativePage.js

import React from 'react';
import pattern from '../../assets/images/pattern.svg';
import logo from '../../assets/images/logo.jpg';
import Brand from './components/brand';
import ViewProfile from './components/viewProfile';
import mj from '../../assets/images/mj.jpg';
import ltwo from '../../assets/images/ltwo.jpg'
import lfive from '../../assets/images/lfive.jpg'
import lthree from '../../assets/images/lthree.jpg'
import Gallery from './components/gallery';
import { cproducts } from '../creativePage/components/cproducts'; // import cproducts from productData.js
import Shop from './components/shop';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import tlogo from '../../assets/images/tlogo.png';
import cTwo from '../../assets/images/cTwo.jpg';
import me  from '../../assets/images/me.jpg'
import gOne from '../../assets/images/gOne.jpg'
import gTwo from '../../assets/images/gTwo.jpg'
import gThree from '../../assets/images/gThree.jpg'


const CreativePage = ({ cartItemsCount }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <header className="p-4 flex justify-between items-center bg-black">
      <div className="ml-8 h-14 flex items-center pr-12 pl-12 ">
                    <img className='w-60 h-auto' src={tlogo} alt="Logo" />
                </div>
        <nav className="space-x-8 flex items-center">
          <Link to='/'><a href="#" className="hover:underline">Home</a></Link>
          <Link to='/allcreatives'><a href="#" className="hover:underline">View all Creatives</a></Link>
          <Link to='/productspage'><a href="#" className="hover:underline">Marketplace</a></Link>
          <a href="#" className="hover:underline">Report</a>
          <Link to='/cart'>
          <div className="relative ">
            <FaShoppingCart className="text-white text-2xl" />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItemsCount}
            </span>
          </div>
          </Link>
        </nav>
      </header>

      {/* Background Image and Profile */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="h-48">
          <img src={pattern} alt="Background Pattern" className="w-full h-full object-cover" />
        </div>

        {/* Brand Profile */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          <Brand
            logo={logo}
            brandName="Cut & Craft"
            category="Traditional craftsmanship with modern laser technology"
            brandDescription="Where precision meets artistry, Cut & Craft brings you unique, handmade laser-cut wooden and accessories. Our signature collection features intricately designed clutches, along with a range of other beautifully crafted items.
"
            whatsapp="https://instagram.com"
            instagram="https://instagram.com"
            facebook="https://facebook.com"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className='mt-96'>
        <ViewProfile
          profilePicture={cTwo}
          fullName='Abena'
          position='Creative Director'
          bio='As I explored various crafts, I became captivated by the precision and versatility of laser cutting. The way it could transform raw materials into delicate, intricate designs left me in awe.'

        />
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-black flex flex-col items-center mt-32">
        <h3 className="text-center text-4xl font-semibold pb-14">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Gallery image={gOne} description="" />
          <Gallery image={gThree} description="" />
          <Gallery image={gTwo} description="" />
        </div>
      </div>

      {/* Shop Section */}
      <div className="p-8 bg-black flex flex-col items-center mt-16">
        <h3 className="text-center text-4xl font-semibold pb-14">Shop</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cproducts.slice(0, 3).map((product) => (
            <Shop
              key={product.id}
              productImage={product.productImage}
              productName={product.productName}
              price={product.price}
              productDescription={product.productDescription}
              cta="Add to Cart"
            />
          ))}
        </div>
        <Link to='/productspage'>
          <button className="mt-6 border border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition">View all</button>
        </Link>
      </div>
    </div >
  );
}

export default CreativePage;
