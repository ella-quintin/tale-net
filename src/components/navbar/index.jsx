import React from 'react';
import doodle from '../../assets/images/doodle.svg';
import { Link } from 'react-router-dom';
import tlogo from '../../assets/images/tlogo.png';

export default function Navbar() {
    return (
        <nav className="bg-black fixed top-0 left-0 w-full h-14 z-50" style={{ backgroundImage: `url(${doodle})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto flex justify-between items-center h-full bg-black bg-opacity-75">
                <div className="ml-8 bg-black h-full flex items-center pr-12 pl-12 ">
                    <img className='w-60 h-auto' src={tlogo} alt="Logo" />
                </div>
                <div className="flex items-center gap-6 text-md font-normal text-white mr-8">
                    <Link to='/'><h3 className="cursor-pointer">Home</h3></Link>
                    <Link to='/about-us'><h3 className="cursor-pointer">About</h3></Link>
                    <h3 className="cursor-pointer">Services</h3>
                    <Link to='/subscription'><h3 className="cursor-pointer">Subscription</h3></Link>
                    <Link to='/allcreatives'><h3 className="cursor-pointer">View all Creatives</h3></Link>
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
