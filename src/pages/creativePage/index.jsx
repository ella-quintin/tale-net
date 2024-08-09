import React from 'react';
import pattern from '../../assets/images/pattern.svg';
import logo from '../../assets/images/logo.jpg';
import Brand from './components/brand';
import ViewProfile from './components/viewProfile';
import framer from '../../assets/images/framer.svg';
import mj from '../../assets/images/mj.jpg';
import Gallery from './components/gallery';
import lfive from '../../assets/images/lfive.jpg';
import lthree from '../../assets/images/lthree.jpg';
import lsix from '../../assets/images/lsix.jpg';
import ltwo from '../../assets/images/ltwo.jpg';
import Shop from './components/shop';

const CreativePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <header className="p-4 flex justify-between items-center bg-black">
        <h1 className="text-xl font-bold">Tale-net</h1>
        <nav className="space-x-8">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Bio</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Marketplace</a>
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
            brandName="Efata By Juba"
            category="Afropolitan Clothing"
            brandDescription="The Efata By Juba ‘Sankofa Collection’ features the stylized heart. The inspiration for this collection was the desire to encourage the African Woman to come back to appreciate her rich culture and to introduce our African heritage to the world. The purpose of this collection is to start a discourse through the styles and fabric combinations. Especially at this particular time when it is imperative to understand other cultures and for them to understand ours."
            instagram="https://instagram.com"
            twitter="https://twitter.com"
            facebook="https://facebook.com"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className='mt-96'>
        <ViewProfile
          framer={framer}
          profilePicture={mj}
          fullName='Julie Baidoe - Ansah'
          position='Creative Director'
          bio='Who said your clothes can’t tell a story or challenge mindsets? Our Sankofa Collection is a work of art and it depicts our strong values of creating a better-unified world for the Efata Woman. It’s a style affair!' 
        />
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-black flex flex-col items-center mt-32">
        <h3 className="text-center text-4xl font-semibold pb-14">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Gallery image={lfive} description="Painter" />
          <Gallery image={lthree} description="Potter" />
          <Gallery image={ltwo} description="Fashion & Apparel" />
        </div>
      </div>
           {/* Shop Section */}
           <div className="p-8 bg-black flex flex-col items-center mt-16">
                <h3 className="text-center text-4xl font-semibold pb-14">Shop</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Shop
                        productImage={lsix}
                        productName="African Ancestry"
                        price="$500.00"
                        productDescription="A beautiful piece celebrating African heritage."
                        cta="Add to Cart"
                    />
                    <Shop
                        productImage={lsix}
                        productName="Akan"
                        price="$200.00"
                        productDescription="A vibrant artwork representing Akan culture."
                        cta="Add to Cart"
                    />
                    <Shop
                        productImage={lsix}
                        productName="Apam"
                        price="$150.00"
                        productDescription="A serene aerial view of Apam fishing village."
                        cta="Add to Cart"
                    />
                </div>
            </div>
        </div>
  );
}

export default CreativePage;