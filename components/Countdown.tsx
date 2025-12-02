import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

export const Countdown: React.FC = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14); 
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-start gap-8 md:gap-12 text-white">
      <TimeItem value={timeLeft.days} label="days" />
      <TimeItem value={timeLeft.hours} label="hours" />
      <TimeItem value={timeLeft.minutes} label="minutes" />
      <TimeItem value={timeLeft.seconds} label="seconds" />
    </div>
  );
};

interface TimeItemProps {
  value: number;
  label: string;
}

const TimeItem: React.FC<TimeItemProps> = ({ value, label }) => {
  const displayValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-start">
      <span className="font-display font-light text-4xl md:text-5xl tracking-tighter">
        {displayValue}
      </span>
      <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
};