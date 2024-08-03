import React from 'react';
import ltwo from '../../assets/images/ltwo.jpg';
import lthree from '../../assets/images/lthree.jpg';
import lfour from '../../assets/images/lfour.jpg';
import lfive from '../../assets/images/lfive.jpg';
import lsix from '../../assets/images/lsix.jpg';
import lseven from '../../assets/images/lseven.jpg';
import Navbar from '../../components/navbar';

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className='bg-black min-h-screen flex flex-col items-center justify-center py-8 pt-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={lsix} alt="Six" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={ltwo} alt="Two" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={lthree} alt="Three" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={lfour} alt="Four" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={lfive} alt="Five" />
                        <img className='rounded-lg shadow-lg hover:scale-105 transform transition duration-300' src={lseven} alt="Seven" />
                    </div>
                    <div className='text-center flex flex-col items-center justify-center'>
                        <h3 className='text-white text-4xl'>Discover <br /> <span className='text-6xl'>creatives</span></h3>
                        <p className='text-white mt-4'>Unleash the tale of your talent</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
