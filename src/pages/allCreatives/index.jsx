
import React, { useState } from 'react';
import doodle from '../../assets/images/doodle.svg';
import { IoSearchOutline, IoFilterOutline } from 'react-icons/io5';
import ViewsCreatives from './components/viewsCreatives';
import mj from '../../assets/images/mj.jpg';
import cTwo from '../../assets/images/cTwo.jpg';
import { Link } from 'react-router-dom';
import UpcomingEvents from '../allCreatives/components/upcomingEvents'

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
          <div className="text-2xl font-sans text-white ml-8">
          <Link to='/'><h1 className="text-xl font-bold">Tale-net</h1></Link>
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
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                          selectedCategory === category ? 'bg-gray-200' : ''
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
          <div className="flex items-center gap-6 text-lg font-normal text-white mr-8">
            <h3 className="cursor-pointer">All Creatives</h3>
            <Link to="/allevents">
              <h3 className="cursor-pointer">Events</h3>
            </Link>
            <h3 className="cursor-pointer">Marketplace</h3>
          </div>
        </div>
      </nav>

      {/* Welcome Text Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center mt-14">
        <h3 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">
          Welcome to the Hub of Creatives
        </h3>
        <p className="text-teal-500 text-xl mt-5">
          Shop, interact and discover events from your favorite creatives
        </p>
      </div>

      {/* Upcoming Events Section */}
      <UpcomingEvents events={events} />

      {/* Creatives Section */}
      <div className="mt-52 px-4 md:px-8 lg:px-12">
      <h3 className="text-4xl text-center text-white mb-8">Creatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ViewsCreatives
            profilePicture={mj}
            bio="Who said your clothes can’t tell a story or challenge mindsets? Our Sankofa Collection is a work of art and it depicts our strong values of creating a better-unified world for the Efata Woman. It’s a style affair!"
          />
          <ViewsCreatives
            profilePicture={cTwo}
            bio="Creative Director"
          />
          <ViewsCreatives
            profilePicture={mj}
            bio="Creative Director"
          />
        </div>
      </div>
    </div>
  );
};

export default AllCreatives;
