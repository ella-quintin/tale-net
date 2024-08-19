import React from 'react';
import { Link } from 'react-router-dom';
import eOne from '../../../assets/images/eOne.jpg'

const UpcomingEventPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative h-screen">
        <img
          src={eOne}
          alt="Event Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Africa Creative Market
          </h1>
          <p className="text-green-500 text-xl mb-6">
            Innovation Meets Imagination
          </p>
          <p className="text-white text-lg mb-6">
            Sept 17 - 20, 2024 | Landmark Event Centre, Lagos, Nigeria
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <button className="bg-green-500 text-black py-2 px-6 rounded hover:bg-green-400 transition">
              REGISTER
            </button>
            <Link to="/highlights2023" className="text-white underline hover:text-green-500 transition">
              Watch Highlights from 2023
            </Link>
          </div>
          <div className="flex space-x-6 text-white text-2xl">
            <div>
              <p className="font-bold text-4xl">31</p>
              <p className="text-lg">Days</p>
            </div>
            <div>
              <p className="font-bold text-4xl">12</p>
              <p className="text-lg">Hours</p>
            </div>
            <div>
              <p className="font-bold text-4xl">16</p>
              <p className="text-lg">Minutes</p>
            </div>
            <div>
              <p className="font-bold text-4xl">00</p>
              <p className="text-lg">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventPage;
