
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

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
      tackles: number;
      passAccuracy: number;
    };
    quote?: string;
    age: number;
    height: string;
    nationality: string;
    strongFoot: 'Left' | 'Right' | 'Both';
  };
  className?: string;
  onViewDetails: (playerId: number) => void;
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
      <div className="text-white/90 font-oswald text-xl">{count}</div>
      <div className="text-white/50 text-xs uppercase">{label}</div>
    </div>
  );
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, className, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Calculate player rating based on position
  const getPlayerRating = (): number => {
    let baseRating = 75;
    
    switch(player.position) {
      case 'Forward':
        return baseRating + (player.stats.goals / 2);
      case 'Midfielder':
        return baseRating + (player.stats.assists / 3);
      case 'Defender':
        return baseRating + (player.stats.tackles / 5);
      case 'Goalkeeper':
        return baseRating + 5;
      default:
        return baseRating;
    }
  };

  const handleClick = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setIsExpanded(!isExpanded);
      }, 150);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(player.id);
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-sm transition-all duration-500 cursor-pointer perspective",
        isExpanded ? "h-[520px]" : "h-[420px]",
        isFlipped ? "card-flip" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Front of card */}
      <div className={cn(
        "absolute inset-0 bg-team-gray w-full h-full transition-all duration-500 backface-hidden",
        isFlipped ? "rotate-y-180" : "rotate-y-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
        
        {/* Player's Rating - FIFA style */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-team-red to-team-black w-14 h-14 rounded-full border-2 border-white/20">
            <span className="text-white font-oswald text-xl font-bold">{Math.floor(getPlayerRating())}</span>
            <span className="text-white/80 text-[10px] uppercase -mt-1">{player.position.substring(0, 3)}</span>
          </div>
        </div>
        
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
                <div className="flex justify-between">
                  <span className="text-white/60">Age:</span>
                  <span>{player.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Height:</span>
                  <span>{player.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Nationality:</span>
                  <span>{player.nationality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Strong Foot:</span>
                  <span>{player.strongFoot}</span>
                </div>
                
                <div className="flex justify-between pt-2">
                  <button 
                    onClick={handleFlip} 
                    className="bg-team-gray/80 hover:bg-team-gray text-white text-xs uppercase font-medium py-1 px-3 rounded-sm transition-colors duration-300 flex items-center"
                  >
                    <Star size={12} className="mr-1" />
                    View Stats
                  </button>
                  <button 
                    onClick={handleViewDetails}
                    className="bg-team-blue/80 hover:bg-team-blue text-white text-xs uppercase font-medium py-1 px-3 rounded-sm transition-colors duration-300"
                  >
                    Full Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expand/Collapse Button */}
        <button 
          className={cn(
            "absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-team-black/70 border border-team-red/50 flex items-center justify-center transition-all",
            isHovered && "bg-team-red/80"
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 
            <ChevronUp size={16} className="text-white" /> : 
            <ChevronDown size={16} className="text-white" />
          }
        </button>
      </div>
      
      {/* Back of card - Stats view */}
      <div className={cn(
        "absolute inset-0 w-full h-full bg-gradient-to-b from-team-black to-team-gray border border-team-blue/30 transition-all duration-500 backface-hidden",
        isFlipped ? "rotate-y-0" : "rotate-y-180"
      )}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-oswald text-xl">{player.name}</h3>
            <button 
              onClick={handleFlip}
              className="text-white/70 hover:text-white bg-team-gray/50 hover:bg-team-gray/80 p-1 rounded-full transition-colors"
            >
              <ChevronDown size={16} />
            </button>
          </div>
          
          {/* FIFA-style Attributes */}
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="text-team-blue font-oswald text-lg mb-4 uppercase">Player Attributes</h4>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Speed</span>
                  <span>{60 + Math.floor(Math.random() * 30)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-red"
                    style={{width: `${60 + Math.floor(Math.random() * 30)}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Shooting</span>
                  <span>{player.position === 'Forward' ? 70 + Math.floor(Math.random() * 20) : 50 + Math.floor(Math.random() * 30)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-red"
                    style={{width: `${player.position === 'Forward' ? 70 + Math.floor(Math.random() * 20) : 50 + Math.floor(Math.random() * 30)}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Passing</span>
                  <span>{player.position === 'Midfielder' ? 75 + Math.floor(Math.random() * 15) : 60 + Math.floor(Math.random() * 20)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-blue"
                    style={{width: `${player.position === 'Midfielder' ? 75 + Math.floor(Math.random() * 15) : 60 + Math.floor(Math.random() * 20)}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Dribbling</span>
                  <span>{player.position === 'Forward' || player.position === 'Midfielder' ? 70 + Math.floor(Math.random() * 20) : 50 + Math.floor(Math.random() * 25)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-blue"
                    style={{width: `${player.position === 'Forward' || player.position === 'Midfielder' ? 70 + Math.floor(Math.random() * 20) : 50 + Math.floor(Math.random() * 25)}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Defending</span>
                  <span>{player.position === 'Defender' || player.position === 'Goalkeeper' ? 75 + Math.floor(Math.random() * 15) : 40 + Math.floor(Math.random() * 30)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-blue"
                    style={{width: `${player.position === 'Defender' || player.position === 'Goalkeeper' ? 75 + Math.floor(Math.random() * 15) : 40 + Math.floor(Math.random() * 30)}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-white/80 mb-1">
                  <span>Physical</span>
                  <span>{55 + Math.floor(Math.random() * 35)}</span>
                </div>
                <div className="h-2 bg-team-gray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-team-red"
                    style={{width: `${55 + Math.floor(Math.random() * 35)}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleViewDetails}
            className="mt-6 bg-team-blue hover:bg-team-blue/80 text-white text-sm uppercase font-medium py-2 px-4 rounded-sm transition-colors duration-300 w-full"
          >
            View Full Profile
          </button>
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
