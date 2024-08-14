import React, { useState } from 'react';
import eOne from '../../../assets/images/eOne.jpg';
import { Link } from 'react-router-dom';

const AllEvents = () => {
  // State to manage events
  const [events, setEvents] = useState([
    {
      eventName: 'Art Expo',
      eventDescription: 'An exhibition showcasing local artists.',
      date: '2024-08-20',
      time: '10:00 AM',
      rate: '$10',
      img: eOne
    },
    {
      eventName: 'Music Festival',
      eventDescription: 'A celebration of music and culture.',
      date: '2024-08-15',
      time: '5:00 PM',
      rate: '$25',
      img: 'https://via.placeholder.com/300x200.png?text=Music+Festival', // Example image URL
    },
    {
      eventName: 'Tech Conference',
      eventDescription: 'Exploring the latest in tech and innovation.',
      date: '2024-08-20',
      time: '9:00 AM',
      rate: '$50',
      img: 'https://via.placeholder.com/300x200.png?text=Tech+Conference', // Example image URL
    },
    {
      eventName: 'Art Expo',
      eventDescription: 'An exhibition showcasing local artists.',
      date: '2024-08-20',
      time: '10:00 AM',
      rate: '$10',
      img: 'https://via.placeholder.com/300x200.png?text=Art+Expo', // Example image URL
    },
    {
      eventName: 'Tech Conference',
      eventDescription: 'Exploring the latest in tech and innovation.',
      date: '2024-08-20',
      time: '9:00 AM',
      rate: '$50',
      img: 'https://via.placeholder.com/300x200.png?text=Tech+Conference', // Example image URL
    },
    {
      eventName: 'Music Festival',
      eventDescription: 'A celebration of music and culture.',
      date: '2024-08-15',
      time: '5:00 PM',
      rate: '$25',
      img: 'https://via.placeholder.com/300x200.png?text=Music+Festival', // Example image URL
    },
    // Add more events here
  ]);

  // State to manage the selected date
  const [selectedDate, setSelectedDate] = useState('');

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Filter events based on the selected date
  const filteredEvents = events.filter((event) => {
    return selectedDate === '' || event.date === selectedDate;
  });

  return (
    <div className="min-h-screen bg-black p-8">
        <Link to='/allcreatives'><button className=' top-8 left-8 border mb-5 border-white text-white py-2 px-8 rounded-lg hover:bg-white hover:text-black transition'>Back</button></Link>
      <h3 className="text-4xl text-center text-white mb-8">Events</h3>

      {/* Date Input for Filtering */}
      <div className="flex justify-center mb-8">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
      </div>

      {/* Display Filtered Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="relative w-full h-60">
                <img
                  src={event.img}
                  alt={`${event.eventName} image`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold mb-2">{event.eventName}</h2>
                  <p className="text-gray-700 text-sm mb-4">{event.eventDescription}</p>
                  <p className="text-gray-500">
                    <span className="font-semibold text-sm">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-semibold text-sm">Time:</span> {event.time}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-semibold text-sm">Rate:</span> {event.rate}
                  </p>
                </div>
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No events found for the selected date.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
