import React from 'react';
import ltwo from '../../assets/images/ltwo.jpg';
import lthree from '../../assets/images/lthree.jpg';
import lfour from '../../assets/images/lfour.jpg';
import lfive from '../../assets/images/lfive.jpg';
import lsix from '../../assets/images/lsix.jpg';
import lseven from '../../assets/images/lseven.jpg';
import Navbar from '../../components/navbar';
import shoe from '../../assets/images/shoe.webp'
import bag from '../../assets/images/bag.jpg'
import furniture from '../../assets/images/furniture.jpg'
import wallart from '../../assets/images/wallart.webp'
import jewel from '../../assets/images/jewel.webp'
import edna from '../../assets/images/edna.jfif'
import afrane from '../../assets/images/afrane.jpg'
import ras from '../../assets/images/ras.jpg'
import al from '../../assets/images/al.jpg'
import ace from '../../assets/images/ace.jpg'
import acesam from '../../assets/images/acesam.jpg'
import finances from '../../assets/images/finances.jpg'
import pe from '../../assets/images/pe.jpg'
import branding from '../../assets/images/branding.jpg'
import tlogo from '../../assets/images/tlogo.png';
import AboutUs from './components/aboutUs';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className='bg-black min-h-screen flex flex-col items-center justify-center py-8 pt-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={acesam} alt="Seven" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={ace} alt="Five" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={edna} alt="Six" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={afrane} alt="Two" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={ras} alt="Three" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={al} alt="Four" />

                    </div>
                    <div className='text-center flex flex-col items-center mb-auto mt-52 pb-96 justify-center'>
                        <h3 className=' text-4xl text-teal-500'>Welcome to <br /> <span className='text-5xl text-white font-bold'>The hub where artistry and innovation converge</span></h3>
                      <Link to='/signup'><button className='text-black font-semibold bg-teal-500 rounded-lg py-3 px-4 mt-4 hover:bg-teal-400'>Sign up as a creative</button></Link>
                    </div>
                </div>
               <AboutUs/>

                <div className="p-8 bg-black flex flex-col items-center mt-32">
                    <h3 className="text-center text-white text-4xl font-semibold pb-14">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={finances} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Financial Consultation</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={branding} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Branding Services</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={pe} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className='flex flex-col justify-center items-center'>
                                    <p className="text-white text-xl font-semibold">Event Organizing</p>
                                </span>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="p-8 bg-black flex flex-col items-center mt-32">
                    <h3 className="text-center text-white text-4xl font-semibold pb-14">Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={shoe} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Shoes</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={bag} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Bags</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={jewel} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className='flex flex-col justify-center items-center'>
                                    <p className="text-white text-xl font-semibold">Furniture</p>
                                    <p className="text-white text-2xl font-bold">Tekura Ghana</p>
                                </span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={furniture} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className='flex flex-col justify-center items-center'>
                                    <p className="text-white text-xl font-semibold">Furniture</p>
                                    <p className="text-white text-2xl font-bold">Tekura Ghana</p>
                                </span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                            <img src={wallart} alt='' className="w-96 h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className='flex flex-col justify-center items-center'>
                                    <p className="text-white text-xl font-semibold">Furniture</p>
                                    <p className="text-white text-2xl font-bold">Tekura Ghana</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-hidden bg-black mt-4">
                    <div
                        className="whitespace-nowrap animate-scroll"
                        style={{ display: 'flex', animation: 'scroll 20s linear infinite' }}
                    >
                        {/* Repeat the logo as needed */}
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        <img src={tlogo} className="inline-block h-full mx-4" alt="Logo" />
                        {/* Add more logos or elements here */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
