import React from 'react';
import doodle from '../../assets/images/doodle.svg';

export default function Navbar() {
    return (
        <nav className="bg-black fixed top-0 left-0 w-full h-14 z-50" style={{ backgroundImage: `url(${doodle})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto flex justify-between items-center h-full bg-black bg-opacity-75">
                <div className="text-2xl font-sans text-white ml-8">
                    <h3>Tale-net</h3>
                </div>
                <div className="flex items-center gap-6 text-lg font-normal text-white mr-8">
                    <h3 className="cursor-pointer">About</h3>
                    <h3 className="cursor-pointer">Services</h3>
                    <h3 className="cursor-pointer">Subscription</h3>
                    <h3 className="cursor-pointer">Vendors</h3>
                    <button className="bg-red-600 px-3 w-28 py-2 rounded-md text-white hover:bg-red-500">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
