
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      tackles?: number;
      passAccuracy?: number;
    };
    quote?: string;
    age?: number;
    height?: string;
    nationality?: string;
    strongFoot?: 'Left' | 'Right' | 'Both';
  };
  className?: string;
}

const StatCounter = ({ 
  value, 
  label, 
  className 
}: { 
  value: number; 
  label: string; 
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1500; // ms
      const steps = 20;
      const increment = Math.ceil(value / steps);
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [value, isVisible]);

  return (
    <div 
      className={cn("text-center", className)}
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className="text-white/90 font-oswald text-xl animate-pulse-glow">{count}</div>
      <div className="text-white/50 text-xs uppercase">{label}</div>
    </div>
  );
};

const StatBar = ({ 
  value, 
  maxValue = 100,
  label
}: { 
  value: number; 
  maxValue?: number;
  label: string;
}) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-white/70 text-xs">{label}</span>
        <span className="text-white/90 text-xs font-medium">{value}/{maxValue}</span>
      </div>
      <div className="w-full bg-team-gray/50 h-2 rounded-sm overflow-hidden">
        <div 
          className="bg-team-red h-full transition-all duration-1000 animate-stat-bar-fill"
          style={{ width: `${percentage}%`, '--stat-percent': `${percentage}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-sm transition-all duration-500 group bg-team-gray h-[420px] cursor-pointer",
        isExpanded && "h-[520px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
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
            <span className={cn(
              "text-team-red uppercase text-sm font-medium tracking-wider",
              isHovered && "animate-pulse"
            )}>
              {player.position}
            </span>
            <div className="h-6 w-6 rounded-full bg-team-red flex items-center justify-center text-white text-xs font-bold">
              {player.number}
            </div>
          </div>
          
          <h3 className={cn(
            "text-white font-oswald text-2xl",
            isHovered && "text-glitch"
          )} data-text={player.name}>
            {player.name}
          </h3>
          
          {/* Stats */}
          <div className="flex space-x-4 pt-2">
            <StatCounter value={player.stats.matches} label="Matches" />
            <StatCounter value={player.stats.goals} label="Goals" />
            <StatCounter value={player.stats.assists} label="Assists" />
          </div>
          
          {/* Quote */}
          {player.quote && (
            <div className={cn(
              "pt-2 italic text-white/70 text-sm transition-all duration-500",
              isExpanded ? "opacity-100" : "opacity-0 h-0",
              isExpanded && "h-auto"
            )}>
              "{player.quote}"
            </div>
          )}
          
          {/* Expanded Content */}
          <div className={cn(
            "pt-4 transition-all duration-500 overflow-hidden",
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="text-white/80 text-sm space-y-3">
              {player.stats.tackles && player.stats.passAccuracy && (
                <div className="pt-2 space-y-2">
                  <StatBar value={player.stats.tackles} maxValue={100} label="Tackles" />
                  <StatBar value={player.stats.passAccuracy} label="Pass Accuracy %" />
                </div>
              )}
              
              {player.nationality && player.age && player.height && (
                <div className="grid grid-cols-3 gap-2 pt-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-center">
                          <div className="text-team-blue text-sm font-medium">{player.nationality}</div>
                          <div className="text-white/50 text-xs">Nation</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Nationality</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-center">
                          <div className="text-team-blue text-sm font-medium">{player.age}</div>
                          <div className="text-white/50 text-xs">Age</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Player Age</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-center">
                          <div className="text-team-blue text-sm font-medium">{player.height}</div>
                          <div className="text-white/50 text-xs">Height</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Player Height</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
              
              <div className="pt-2">
                <button className="bg-team-blue/80 hover:bg-team-blue text-white text-xs uppercase font-medium py-1 px-3 rounded-sm transition-colors duration-300">
                  Full Profile
                </button>
              </div>
            </div>
          </div>
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
