
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
      <div className="text-white font-oswald text-xl font-bold animate-pulse-glow">{count}</div>
      <div className="text-white/70 text-xs uppercase tracking-wider">{label}</div>
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
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-white text-xs font-medium">{label}</span>
        <span className="text-team-blue font-oswald text-xs font-bold">{value}</span>
      </div>
      <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        <div 
          className="bg-gradient-to-r from-team-blue to-team-red h-full transition-all duration-1000 animate-stat-bar-fill"
          style={{ width: `${percentage}%`, '--stat-percent': `${percentage}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

// Function to determine color based on stat value
const getStatColor = (value: number): string => {
  if (value >= 90) return "text-[#ff8800] font-bold";
  if (value >= 80) return "text-[#1ed760] font-bold";
  if (value >= 70) return "text-team-blue font-bold";
  return "text-white/80";
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate overall rating based on stats
  const calculateOverall = () => {
    const { matches, goals, assists, tackles = 0, passAccuracy = 0 } = player.stats;
    let base = 70;
    
    // Different weightings based on position
    if (player.position === "Forward") {
      base += (goals * 0.5) + (assists * 0.3);
    } else if (player.position === "Midfielder") {
      base += (assists * 0.4) + (goals * 0.2) + (passAccuracy * 0.1);
    } else if (player.position === "Defender") {
      base += (tackles * 0.4) + (passAccuracy * 0.2);
    } else if (player.position === "Goalkeeper") {
      base += 15; // Goalkeepers start higher
    }
    
    // Cap at 99
    return Math.min(Math.round(base), 99);
  };
  
  const overallRating = calculateOverall();

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-md transition-all duration-500 group h-[450px] cursor-pointer perspective-1000",
        isExpanded && "h-[550px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Background with Anime-Style Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#403E43] to-[#1A1F2C] z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNwb3J0JTIwcGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-repeat mix-blend-overlay"></div>
      </div>
      
      {/* Animated Glowing Edge */}
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )}>
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#9b87f5] via-[#1EAEDB] to-[#D946EF] opacity-50 blur-md animate-pulse"></div>
      </div>
      
      {/* Card Content */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col">
        {/* Top Section with Rating and Position */}
        <div className="flex justify-between items-start mb-2">
          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] p-2 rounded-md text-white font-oswald">
            <div className="text-4xl font-bold leading-none">{overallRating}</div>
            <div className="text-xs uppercase tracking-wider">Overall</div>
          </div>
          
          <div className="text-right">
            <div className="bg-gradient-to-r from-[#0EA5E9] to-[#1A1F2C] px-3 py-1 rounded-md">
              <span className="text-white text-sm font-bold tracking-wide uppercase">{player.position}</span>
            </div>
            <div className="mt-1 mr-1">
              <span className="text-white/60 text-xs">{player.nationality}</span>
            </div>
          </div>
        </div>
        
        {/* Player Image with Special Effects */}
        <div className="relative h-56 mb-3 overflow-hidden rounded-t-md group-hover:scale-105 transition-transform duration-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img 
            src={player.image} 
            alt={player.name}
            className="h-full w-full object-cover object-center"
          />
          
          {/* Player Number */}
          <div className="absolute bottom-2 right-2 bg-black/50 h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 z-20">
            <span className="text-white font-oswald text-xl font-bold">{player.number}</span>
          </div>
          
          {/* Player Name */}
          <div className="absolute bottom-0 left-0 w-full px-3 py-2 z-20">
            <h3 className="text-white font-oswald text-xl font-bold truncate text-shadow">{player.name}</h3>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-black/30 backdrop-blur-sm rounded-md p-3 border border-white/10">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <StatCounter value={player.stats.matches} label="Matches" />
            <StatCounter value={player.stats.goals} label="Goals" />
            <StatCounter value={player.stats.assists} label="Assists" />
          </div>
          
          {/* Key Attribute Ratings */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 my-2">
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Speed</span>
              <span className={getStatColor(75)}>75</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Shooting</span>
              <span className={getStatColor(player.position === "Forward" ? 85 : 70)}>
                {player.position === "Forward" ? 85 : 70}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Passing</span>
              <span className={getStatColor(player.position === "Midfielder" ? 87 : 72)}>
                {player.position === "Midfielder" ? 87 : 72}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Dribbling</span>
              <span className={getStatColor(78)}>78</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Defense</span>
              <span className={getStatColor(player.position === "Defender" ? 88 : 65)}>
                {player.position === "Defender" ? 88 : 65}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 text-xs">Physical</span>
              <span className={getStatColor(76)}>76</span>
            </div>
          </div>
        </div>
        
        {/* Expandable Content */}
        <div className={cn(
          "mt-3 overflow-hidden transition-all duration-500 bg-black/30 backdrop-blur-sm rounded-md border border-white/10",
          isExpanded ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0 p-0"
        )}>
          {/* Quote */}
          {player.quote && (
            <div className="italic text-white/80 text-sm mb-3 border-l-2 border-team-blue pl-3">
              "{player.quote}"
            </div>
          )}
          
          {/* Advanced Stats */}
          {player.stats.tackles !== undefined && player.stats.passAccuracy !== undefined && (
            <div className="space-y-2 mt-3">
              <StatBar value={player.stats.tackles} maxValue={100} label="Tackles" />
              <StatBar value={player.stats.passAccuracy} label="Pass Accuracy %" />
            </div>
          )}
          
          {/* Player Details */}
          {player.age && player.height && (
            <div className="grid grid-cols-3 gap-2 mt-3">
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
        </div>
      </div>
      
      {/* Special Card Effect Overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 z-20 transition-opacity duration-300 pointer-events-none",
        isHovered && "opacity-100"
      )}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9b87f5]/5 to-transparent mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default PlayerCard;
