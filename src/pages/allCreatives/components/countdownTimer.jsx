// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex gap-20 mt-8">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="text-center">
          <span className="text-6xl text-white font-medium">{timeLeft[interval]}</span>
          <span className="text-sm text-gray-300 block">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
