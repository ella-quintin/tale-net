// UpcomingEvents.js
import React from 'react';

const UpcomingEvents = ({ events }) => {
  // Filter and sort the events to get only the upcoming ones
  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="mt-20 px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl text-white mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-40 w-full">
              <img
                src={event.imageUrl}
                alt={`${event.eventName} image`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-bold mb-1">{event.eventName}</h2>
                <p className="text-gray-700 mb-2">{event.eventDescription}</p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Time:</span> {event.time}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Rate:</span> {event.rate}
                </p>
              </div>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
