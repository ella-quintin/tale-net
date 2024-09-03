import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import acesam from '../../assets/images/acesam.jpg';
import ace from '../../assets/images/ace.jpg';
import edna from '../../assets/images/edna.jfif';
import afrane from '../../assets/images/afrane.jpg';
import ras from '../../assets/images/ras.jpg';
import al from '../../assets/images/al.jpg';
import finances from '../../assets/images/finances.jpg';
import pe from '../../assets/images/pe.jpg';
import branding from '../../assets/images/branding.jpg';
import shoe from '../../assets/images/shoe.webp';
import bag from '../../assets/images/bag.jpg';
import furniture from '../../assets/images/furniture.jpg';
import wallart from '../../assets/images/wallart.webp';
import jewel from '../../assets/images/jewel.jpg';
import AboutUs from './components/aboutUs';

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className='bg-black min-h-screen flex flex-col items-center justify-center py-8 pt-24 overflow-x-hidden'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {[acesam, ace, edna, afrane, ras, al].map((image, index) => (
                            <img
                                key={index}
                                className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300 w-full h-auto object-cover'
                                src={image}
                                alt={`Image ${index}`}
                            />
                        ))}
                    </div>
                    <div className='text-center flex flex-col items-center mb-auto mt-8 sm:mt-16 md:mt-24 pb-16 justify-center px-4'>
                        <h3 className='text-xl sm:text-2xl md:text-3xl text-teal-500'>Welcome to <br /> 
                            <span className='text-2xl sm:text-3xl md:text-4xl text-white font-bold'>
                                The hub where artistry and innovation converge
                            </span>
                        </h3>
                        <Link to='/signup'>
                            <button className='text-black font-semibold bg-teal-500 rounded-lg py-2 px-4 mt-4 hover:bg-teal-400'>
                                Sign up as a creative
                            </button>
                        </Link>
                    </div>
                </div>

                <AboutUs />

                <div className="p-4 sm:p-8 bg-black flex flex-col items-center mt-12 sm:mt-24">
                    <h3 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold pb-6">Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full">
                        {[finances, branding, pe].map((service, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full">
                                <img src={service} alt='' className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg sm:text-xl font-semibold">{index === 0 ? 'Financial Advice' : index === 1 ? 'Branding Services' : 'Event Organizing'}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 sm:p-8 bg-black flex flex-col items-center mt-12 sm:mt-24">
                    <h3 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold pb-6">Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full">
                        {[shoe, bag, jewel, furniture, wallart].map((product, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full">
                                <img src={product} alt='' className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg sm:text-xl font-semibold">
                                        {index === 0 ? 'Shoes' : index === 1 ? 'Bags' : index === 2 ? 'Jewelry' : index === 3 ? 'Furniture' : 'Wall Art'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
