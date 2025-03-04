
import React from 'react';
import { X, Award, Flag, Footprints, GitBranch, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlayerDetailProps {
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
    quote: string;
    age: number;
    height: string;
    nationality: string;
    strongFoot: 'Left' | 'Right' | 'Both';
  };
  onClose: () => void;
}

const PlayerDetail: React.FC<PlayerDetailProps> = ({ player, onClose }) => {
  // Calculate primary stat based on position
  const getPrimaryStatLabel = (): string => {
    switch (player.position) {
      case 'Forward': return 'Goal Scoring';
      case 'Midfielder': return 'Ball Control';
      case 'Defender': return 'Tackling';
      case 'Goalkeeper': return 'Reflexes';
      default: return 'Overall';
    }
  };

  const getPrimaryStatValue = (): number => {
    switch (player.position) {
      case 'Forward': return 65 + (player.stats.goals * 2);
      case 'Midfielder': return 70 + (player.stats.passAccuracy / 5);
      case 'Defender': return 75 + (player.stats.tackles / 2);
      case 'Goalkeeper': return 80 - (player.stats.goals / 10);
      default: return 70;
    }
  };

  const getSecondaryStatValue = (): number => {
    return 60 + Math.floor(Math.random() * 30);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-gradient-to-b from-team-gray to-team-black border border-team-red/30 rounded-md w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-in"
        style={{
          boxShadow: '0 0 30px rgba(217, 4, 41, 0.3)',
        }}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-team-red/30">
          <h2 className="text-2xl font-oswald text-white uppercase tracking-wider">Player Profile</h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-team-red/20"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image and Basic Info */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-md group h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-team-black via-transparent to-transparent z-10"></div>
                
                {/* Player Number */}
                <div className="absolute top-4 right-4 font-oswald text-8xl font-bold opacity-20 text-white z-10">
                  {player.number}
                </div>
                
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <span className="text-team-red uppercase text-sm font-medium tracking-wider">
                    {player.position}
                  </span>
                  <h3 className="text-white font-oswald text-3xl mt-1">
                    {player.name}
                  </h3>
                </div>
              </div>

              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-3 uppercase">Basic Info</h4>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span className="text-white/60">Age:</span>
                    <span>{player.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Height:</span>
                    <span>{player.height}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Nationality:</span>
                    <div className="flex items-center gap-2">
                      <Flag size={14} className="text-team-blue" />
                      <span>{player.nationality}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Strong Foot:</span>
                    <div className="flex items-center gap-2">
                      <Footprints size={14} className="text-team-blue" />
                      <span>{player.strongFoot}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats and Details */}
            <div className="space-y-6">
              {/* Overall Rating - Blue Lock Style */}
              <div className="bg-team-black/80 border border-team-blue/30 p-5 rounded-md flex flex-col items-center">
                <div className="text-white/60 uppercase text-sm tracking-wider mb-2">Overall Rating</div>
                <div className="relative bg-gradient-to-r from-team-red to-team-blue rounded-full w-24 h-24 flex items-center justify-center mb-3">
                  <div className="text-white font-oswald text-4xl font-bold">
                    {75 + Math.floor(Math.random() * 15)}
                  </div>
                </div>
                <div className="text-white font-medium">{player.quote}</div>
              </div>

              {/* Stats - FIFA Style */}
              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-4 uppercase">Key Attributes</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-white/80 mb-1">
                      <span className="flex items-center">
                        <TrendingUp size={16} className="mr-2 text-team-red" />
                        {getPrimaryStatLabel()}
                      </span>
                      <span>{getPrimaryStatValue()}</span>
                    </div>
                    <div className="h-2 bg-team-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-team-red transition-all duration-1000"
                        style={{ width: `${getPrimaryStatValue()}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-white/80 mb-1">
                      <span className="flex items-center">
                        <GitBranch size={16} className="mr-2 text-team-blue" />
                        Passing
                      </span>
                      <span>{getSecondaryStatValue()}</span>
                    </div>
                    <div className="h-2 bg-team-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-team-blue transition-all duration-1000"
                        style={{ width: `${getSecondaryStatValue()}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-white/80 mb-1">
                      <span className="flex items-center">
                        <Award size={16} className="mr-2 text-team-blue" />
                        Technique
                      </span>
                      <span>{getSecondaryStatValue()}</span>
                    </div>
                    <div className="h-2 bg-team-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-team-blue transition-all duration-1000"
                        style={{ width: `${getSecondaryStatValue()}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Stats */}
              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-3 uppercase">Season Stats</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">{player.stats.matches}</div>
                    <div className="text-white/60 text-sm">Matches</div>
                  </div>
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">{player.stats.goals}</div>
                    <div className="text-white/60 text-sm">Goals</div>
                  </div>
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">{player.stats.assists}</div>
                    <div className="text-white/60 text-sm">Assists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
