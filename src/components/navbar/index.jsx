import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import doodle from '../../assets/images/doodle.svg';
import tlogo from '../../assets/images/tlogo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black fixed top-0 left-0 w-full h-14 z-50" style={{ backgroundImage: `url(${doodle})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto flex justify-between items-center h-full bg-black bg-opacity-75 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <img className='w-40 h-auto' src={tlogo} alt="Logo" />
                </div>
                
                {/* Mobile Menu Toggle */}
                <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Desktop and Mobile Links */}
                <div className={`flex-col sm:flex-row sm:flex items-center gap-6 text-md font-normal text-white ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
                    <Link to='/'><h3 className="cursor-pointer hover:text-gray-300">Home</h3></Link>
                    <Link to='/about-us'><h3 className="cursor-pointer hover:text-gray-300">About</h3></Link>
                    <h3 className="cursor-pointer hover:text-gray-300">Services</h3>
                    <Link to='/subscription'><h3 className="cursor-pointer hover:text-gray-300">Subscription</h3></Link>
                    <Link to='/allcreatives'><h3 className="cursor-pointer hover:text-gray-300">View all Creatives</h3></Link>
                    <Link to='/login'>
                        <button className="bg-red-600 px-3 w-28 py-2 rounded-md text-white hover:bg-red-500">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
