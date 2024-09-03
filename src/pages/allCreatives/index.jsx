import React, { useState } from 'react';
import doodle from '../../assets/images/doodle.svg';
import { IoSearchOutline, IoFilterOutline } from 'react-icons/io5';
import ViewsCreatives from './components/viewsCreatives';
import mj from '../../assets/images/mj.jpg';
import cTwo from '../../assets/images/cTwo.jpg';
import { Link } from 'react-router-dom';
import eOne from '../../assets/images/eOne.jpg'
import CountdownTimer from './components/countdownTimer'
import tlogo from '../../assets/images/tlogo.png';
import edna from '../../assets/images/edna.jfif'
import me  from '../../assets/images/me.jpg'


const AllCreatives = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Function to handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowFilterDropdown(false);
  };

  // Function to toggle filter dropdown
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  // Events Data
  const events = [
    {
      eventName: 'Art Expo',
      eventDescription: 'An exhibition showcasing local artists.',
      date: '2024-08-20',
      time: '10:00 AM',
      rate: '$10',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Art+Expo',
    },
    {
      eventName: 'Music Festival',
      eventDescription: 'A celebration of music and culture.',
      date: '2024-08-15',
      time: '5:00 PM',
      rate: '$25',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Music+Festival',
    },
    {
      eventName: 'Tech Conference',
      eventDescription: 'Exploring the latest in tech and innovation.',
      date: '2024-08-20',
      time: '9:00 AM',
      rate: '$50',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Tech+Conference',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation Bar */}
      <nav
        className="bg-black fixed top-0 left-0 w-full h-14 z-50"
        style={{
          backgroundImage: `url(${doodle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex justify-between items-center h-full bg-black bg-opacity-75">
          <div className="ml-8 bg-black h-full flex items-center pr-12 pl-12 ">
            <img className='w-60 h-auto' src={tlogo} alt="Logo" />
          </div>
          <div className="flex-1 flex items-center justify-end px-4 relative">
            {/* Search Bar with Icon Inside */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full h-8 pl-10 pr-4 py-2 rounded-xl bg-[#FFF9F0] focus:outline-none"
                placeholder="Search..."
              />
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#304A70]" />
            </div>
            {/* Filter Icon */}
            <IoFilterOutline
              className="ml-3 text-white cursor-pointer"
              onClick={toggleFilterDropdown}
            />
            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-lg z-50 w-40">
                <ul>
                  {['All', 'Arts', 'Furnitures', 'Bags', 'Accessories'].map(
                    (category) => (
                      <li
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedCategory === category ? 'bg-gray-200' : ''
                          }`}
                      >
                        {category}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-6 text-md font-normal text-white mr-8">
            <Link to='/'><h3 className="cursor-pointer">Home</h3></Link>
            <Link to="/allevents">
              <h3 className="cursor-pointer">Events</h3>
            </Link>
            <h3 className="cursor-pointer">Marketplace</h3>
          </div>
        </div>
      </nav>

      {/* Upcoming Events Section */}
      <div className="flex items-center justify-center text-center mt-14">
        <Link to="/upcomingevent" className="flex items-center gap-8">
          <img
            src={eOne}
            alt="Africa Creative Market"
            className="w-80 max-w-lg mt-32 rounded-md shadow-md"
          />
          <div className='flex flex-col mt-20'>
            <p className='text-white font-bold text-left'>Upcoming Event</p>
            <h3 className="text-white text-6xl  font-semibold">
              OSAGYEFO MADE IN
            </h3>
            <h3 className="text-white text-5xl text-left font-semibold">
              GHANA FAIR
            </h3>
            <p className="text-white text-left text-xl mt-10">
              Sales & Exhibition
            </p>
            <p className="text-green-500 text-left text-xl">
              Sept 21, 2024 | Kwame Nkrumah Memorial Park.
            </p>
            {/* Countdown Timer Component */}
            <span className='flex left gap-4'>
              <button className='bg-red-600 text-white rounded-2xl py-3 px-4 text-lg w-36 mt-4'>Register</button>
              <button className='border border-white text-white rounded-2xl py-3 px-4 w-72 mt-4'>Watch Video Hightlight</button>
            </span>
            <CountdownTimer targetDate="2024-09-21T00:00:00" />
          </div>
        </Link>
      </div>

      {/* Creatives Section */}
      <div className="mt-52 px-4 md:px-8 lg:px-12">
        <h3 className="text-4xl text-center text-white mb-8">Creatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ViewsCreatives
            profilePicture={cTwo}
            name='Abena'
            bio="Creactive Director"
            brand='Cut & Craft'
          />
          <ViewsCreatives
            profilePicture={mj}
            name='Julie Baidoe-Ansah'
            bio="Creative Director"
            brand='Efata By Juba'
          />
          <ViewsCreatives
            profilePicture={edna}
            name='Edna (the shoemakergurl)'
            bio="Creative Director"
            brand='Ahofade'
          />
        </div>
      </div>
    </div>
  );
};

export default AllCreatives;
