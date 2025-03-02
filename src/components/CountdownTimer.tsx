
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className={cn("flex justify-center space-x-4", className)}>
      <div className="flex flex-col items-center">
        <div className="bg-team-black border border-team-gray text-white font-oswald text-3xl sm:text-4xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-sm">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-team-black border border-team-gray text-white font-oswald text-3xl sm:text-4xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-sm">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-team-black border border-team-gray text-white font-oswald text-3xl sm:text-4xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-sm">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-team-black border border-team-gray text-white font-oswald text-3xl sm:text-4xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-sm">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-white/70 text-xs mt-2 uppercase">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
