
import React, { useState } from 'react';
import { X, Award, Flag, Footprints, GitBranch, TrendingUp, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  Legend
} from 'recharts';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'career' | 'archive'>('overview');
  const [isFollowing, setIsFollowing] = useState(false);

  // Generate career data (in a real app, this would come from an API)
  const generateCareerData = () => {
    const seasons = ['2019', '2020', '2021', '2022', '2023'];
    return seasons.map(season => {
      const baseGoals = player.position === 'Forward' ? 8 : (player.position === 'Midfielder' ? 4 : 1);
      const baseAssists = player.position === 'Midfielder' ? 6 : (player.position === 'Forward' ? 4 : 2);
      const baseTackles = player.position === 'Defender' ? 40 : (player.position === 'Midfielder' ? 20 : 10);
      
      return {
        season,
        goals: Math.max(0, baseGoals + Math.floor(Math.random() * 12 - 3)),
        assists: Math.max(0, baseAssists + Math.floor(Math.random() * 8 - 2)),
        matches: 25 + Math.floor(Math.random() * 13),
        tackles: Math.max(0, baseTackles + Math.floor(Math.random() * 20 - 10)),
        passAccuracy: 65 + Math.floor(Math.random() * 25)
      };
    });
  };

  const careerData = generateCareerData();

  // Generate radar chart data for player attributes
  const radarData = [
    {
      subject: 'Speed',
      A: 65 + Math.floor(Math.random() * 25),
      fullMark: 100,
    },
    {
      subject: 'Shooting',
      A: player.position === 'Forward' ? 75 + Math.floor(Math.random() * 15) : 50 + Math.floor(Math.random() * 25),
      fullMark: 100,
    },
    {
      subject: 'Passing',
      A: player.position === 'Midfielder' ? 80 + Math.floor(Math.random() * 15) : 60 + Math.floor(Math.random() * 20),
      fullMark: 100,
    },
    {
      subject: 'Dribbling',
      A: player.position === 'Forward' || player.position === 'Midfielder' ? 75 + Math.floor(Math.random() * 15) : 50 + Math.floor(Math.random() * 20),
      fullMark: 100,
    },
    {
      subject: 'Defending',
      A: player.position === 'Defender' ? 80 + Math.floor(Math.random() * 15) : 45 + Math.floor(Math.random() * 25),
      fullMark: 100,
    },
    {
      subject: 'Physical',
      A: 60 + Math.floor(Math.random() * 30),
      fullMark: 100,
    },
  ];

  // Generate archive data
  const archiveItems = [
    { title: "League Champion", date: "2023", description: "Won the national championship" },
    { title: "Team MVP", date: "2022", description: "Voted most valuable player" },
    { title: "Goal of the Season", date: "2021", description: "Spectacular volley from outside the box" },
    { title: "International Debut", date: "2020", description: "First appearance for national team" },
    { title: "Professional Debut", date: "2019", description: "First professional match" }
  ];

  // Calculate player rating based on position
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
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden animate-fade-in">
      <div 
        className="bg-gradient-to-b from-team-gray to-team-black border border-team-red/30 rounded-md w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        style={{
          boxShadow: '0 0 30px rgba(217, 4, 41, 0.3)',
        }}
      >
        {/* Header with tabs and close button */}
        <div className="flex justify-between items-center p-4 border-b border-team-red/30">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-oswald text-white uppercase tracking-wider">{player.name}</h2>
            <span className="text-team-red uppercase text-sm font-medium tracking-wider bg-black/40 px-2 py-0.5 rounded-sm">
              {player.position}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={cn(
                "flex items-center space-x-1 px-3 py-1 rounded-sm transition-all duration-300",
                isFollowing 
                  ? "bg-team-red/80 text-white" 
                  : "bg-team-gray/80 text-white/70 hover:bg-team-gray"
              )}
            >
              <Heart size={16} className={isFollowing ? "fill-white" : ""} />
              <span className="text-sm">{isFollowing ? 'Following' : 'Follow'}</span>
            </button>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-team-red/20"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-team-red/30">
          <button 
            onClick={() => setActiveTab('overview')}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors",
              activeTab === 'overview' 
                ? "text-team-red border-b-2 border-team-red" 
                : "text-white/70 hover:text-white"
            )}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('career')}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors",
              activeTab === 'career' 
                ? "text-team-red border-b-2 border-team-red" 
                : "text-white/70 hover:text-white"
            )}
          >
            Career Stats
          </button>
          <button 
            onClick={() => setActiveTab('archive')}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors",
              activeTab === 'archive' 
                ? "text-team-red border-b-2 border-team-red" 
                : "text-white/70 hover:text-white"
            )}
          >
            Achievements
          </button>
        </div>

        {/* Content area - scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
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
                    <h3 className="text-white font-oswald text-3xl mt-1 text-shadow-sm">
                      {player.name}
                    </h3>
                  </div>
                </div>

                <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                  <h4 className="text-white/90 text-lg font-oswald mb-3 uppercase">Basic Info</h4>
                  <div className="space-y-3 text-white/80">
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

                {/* Season Stats */}
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

                {/* Radar Chart - FIFA Style */}
                <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                  <h4 className="text-white/90 text-lg font-oswald mb-4 uppercase text-center">Player Attributes</h4>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#444" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#ccc' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#ccc' }} />
                        <Radar name={player.name} dataKey="A" stroke="#D90429" fill="#D90429" fillOpacity={0.6} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
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
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-oswald text-white mb-6">Career Statistics</h3>
              
              {/* Goals Chart */}
              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-4">Goals per Season</h4>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={careerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="season" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#222', 
                          borderColor: '#D90429',
                          color: '#fff' 
                        }} 
                      />
                      <Area type="monotone" dataKey="goals" stroke="#D90429" fill="#D90429" fillOpacity={0.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Assists and Matches Chart */}
              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-4">Performance Metrics</h4>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={careerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="season" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#222', 
                          borderColor: '#00A6FB',
                          color: '#fff' 
                        }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="assists" stroke="#00A6FB" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="tackles" stroke="#84cc16" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="passAccuracy" stroke="#f97316" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Career Summary */}
              <div className="bg-team-gray/50 border border-white/10 p-4 rounded-md">
                <h4 className="text-white/90 text-lg font-oswald mb-4">Career Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">
                      {careerData.reduce((sum, item) => sum + item.matches, 0)}
                    </div>
                    <div className="text-white/60 text-sm">Total Matches</div>
                  </div>
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">
                      {careerData.reduce((sum, item) => sum + item.goals, 0)}
                    </div>
                    <div className="text-white/60 text-sm">Total Goals</div>
                  </div>
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-red text-2xl font-oswald animate-pulse-glow">
                      {careerData.reduce((sum, item) => sum + item.assists, 0)}
                    </div>
                    <div className="text-white/60 text-sm">Total Assists</div>
                  </div>
                  <div className="text-center p-3 bg-team-black/30 rounded-md">
                    <div className="text-team-blue text-2xl font-oswald animate-pulse-glow">
                      {Math.floor(careerData.reduce((sum, item) => sum + item.passAccuracy, 0) / careerData.length)}%
                    </div>
                    <div className="text-white/60 text-sm">Avg. Pass Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'archive' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-oswald text-white mb-6">Career Highlights</h3>
              
              <div className="space-y-4">
                {archiveItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-team-gray/30 border border-white/10 p-4 rounded-md hover:border-team-red/30 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white font-oswald text-lg">{item.title}</h4>
                        <p className="text-white/70 mt-1">{item.description}</p>
                      </div>
                      <div className="bg-team-black/50 px-2 py-1 rounded text-team-red font-medium">
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-team-black/30 border border-team-red/20 p-6 rounded-md text-center">
                <Award size={32} className="text-team-red mx-auto mb-3" />
                <h4 className="text-white font-oswald text-xl mb-2">Career Achievements</h4>
                <div className="text-white/70">
                  <p className="mb-2">Throughout {player.name}'s career, they have proven to be a valuable asset to every team they've been part of.</p>
                  <p>With exceptional skill and dedication, they continue to be a key player in our roster.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
