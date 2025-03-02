
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  player: {
    id: number;
    name: string;
    position: string;
    number: number;
    image: string;
    stats: {
      matches: number;
      goals: number;
      assists: number;
    };
    quote?: string;
  };
  className?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-sm transition-all duration-500 group bg-team-gray h-[420px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
      
      {/* Player Number */}
      <div className="absolute top-4 right-4 font-oswald text-6xl font-bold opacity-30 text-white z-10">
        {player.number}
      </div>
      
      {/* Player Image */}
      <div className="h-full w-full overflow-hidden">
        <img 
          src={player.image} 
          alt={player.name}
          className={cn(
            "h-full w-full object-cover object-center transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      {/* Player Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-team-red uppercase text-sm font-medium tracking-wider">
              {player.position}
            </span>
            <div className="h-6 w-6 rounded-full bg-team-red flex items-center justify-center text-white text-xs font-bold">
              {player.number}
            </div>
          </div>
          <h3 className="text-white font-oswald text-2xl">{player.name}</h3>
          
          {/* Stats */}
          <div className="flex space-x-4 pt-2">
            <div className="text-center">
              <div className="text-white/90 font-oswald text-xl">{player.stats.matches}</div>
              <div className="text-white/50 text-xs uppercase">Matches</div>
            </div>
            <div className="text-center">
              <div className="text-white/90 font-oswald text-xl">{player.stats.goals}</div>
              <div className="text-white/50 text-xs uppercase">Goals</div>
            </div>
            <div className="text-center">
              <div className="text-white/90 font-oswald text-xl">{player.stats.assists}</div>
              <div className="text-white/50 text-xs uppercase">Assists</div>
            </div>
          </div>
          
          {/* Quote */}
          {player.quote && (
            <div className="pt-2 italic text-white/70 text-sm">
              "{player.quote}"
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-team-blue/20 z-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>
    </div>
  );
};

export default PlayerCard;
