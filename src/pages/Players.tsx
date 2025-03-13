import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlayerCard from '@/components/PlayerCard';
import PlayerDetail from '@/components/PlayerDetail';
import { Search, Filter, Users, Trophy, TrendingUp } from 'lucide-react';

interface PlayerData {
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
}

const players: PlayerData[] = [
  {
    id: 1,
    name: 'Alex Martinez',
    position: 'Forward',
    number: 9,
    image: 'https://images.unsplash.com/photo-1610910608281-d4584a9a2171?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 42,
      goals: 28,
      assists: 10,
      tackles: 15,
      passAccuracy: 78,
    },
    quote: "Every match is a new opportunity to create something beautiful.",
    age: 24,
    height: '6\'1"',
    nationality: 'Spain',
    strongFoot: 'Right'
  },
  {
    id: 2,
    name: 'Carlos Rivera',
    position: 'Midfielder',
    number: 8,
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    stats: {
      matches: 45,
      goals: 12,
      assists: 24,
      tackles: 36,
      passAccuracy: 89,
    },
    quote: "The midfield is where magic happens.",
    age: 26,
    height: '5\'10"',
    nationality: 'Brazil',
    strongFoot: 'Left'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Defender',
    number: 4,
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    stats: {
      matches: 38,
      goals: 2,
      assists: 5,
      tackles: 76,
      passAccuracy: 82,
    },
    quote: "Defense is the foundation of every victory.",
    age: 28,
    height: '6\'2"',
    nationality: 'England',
    strongFoot: 'Right'
  },
  {
    id: 4,
    name: 'Jamal Williams',
    position: 'Goalkeeper',
    number: 1,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    stats: {
      matches: 40,
      goals: 0,
      assists: 2,
      tackles: 8,
      passAccuracy: 75,
    },
    quote: "The last line of defense, the first step to victory.",
    age: 30,
    height: '6\'4"',
    nationality: 'Nigeria',
    strongFoot: 'Right'
  },
  {
    id: 5,
    name: 'Leo Kim',
    position: 'Midfielder',
    number: 10,
    image: 'https://images.unsplash.com/photo-1552849397-8b58ad9a6a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 36,
      goals: 15,
      assists: 18,
      tackles: 25,
      passAccuracy: 92,
    },
    quote: "Creativity and vision define a true playmaker.",
    age: 23,
    height: '5\'9"',
    nationality: 'South Korea',
    strongFoot: 'Both'
  },
  {
    id: 6,
    name: 'David Torres',
    position: 'Forward',
    number: 11,
    image: 'https://images.unsplash.com/photo-1622973795626-b8ccaedcb846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 32,
      goals: 20,
      assists: 8,
      tackles: 12,
      passAccuracy: 72,
    },
    quote: "Speed and precision are my weapons.",
    age: 22,
    height: '5\'11"',
    nationality: 'Mexico',
    strongFoot: 'Right'
  },
  {
    id: 7,
    name: 'Hiroshi Tanaka',
    position: 'Midfielder',
    number: 6,
    image: 'https://images.unsplash.com/photo-1602001638083-68909bf9b441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 39,
      goals: 8,
      assists: 15,
      tackles: 42,
      passAccuracy: 91,
    },
    quote: "Every pass should tell a story.",
    age: 25,
    height: '5\'8"',
    nationality: 'Japan',
    strongFoot: 'Right'
  },
  {
    id: 8,
    name: 'Ibrahim Diallo',
    position: 'Defender',
    number: 2,
    image: 'https://images.unsplash.com/photo-1627162279169-2da95578d6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 41,
      goals: 1,
      assists: 4,
      tackles: 82,
      passAccuracy: 76,
    },
    quote: "In defense, timing is everything.",
    age: 27,
    height: '6\'3"',
    nationality: 'Senegal',
    strongFoot: 'Left'
  },
  {
    id: 9,
    name: 'Sofia Kovač',
    position: 'Forward',
    number: 7,
    image: 'https://images.unsplash.com/photo-1613757874090-49061460a4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 37,
      goals: 22,
      assists: 9,
      tackles: 10,
      passAccuracy: 79,
    },
    quote: "Attack with conviction, celebrate with passion.",
    age: 21,
    height: '5\'7"',
    nationality: 'Croatia',
    strongFoot: 'Right'
  },
  {
    id: 10,
    name: 'Gabriel Santos',
    position: 'Midfielder',
    number: 14,
    image: 'https://images.unsplash.com/photo-1614632537423-5e1ed3friers?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 33,
      goals: 7,
      assists: 19,
      tackles: 29,
      passAccuracy: 88,
    },
    quote: "The game speaks through the ball.",
    age: 26,
    height: '5\'10"',
    nationality: 'Brazil',
    strongFoot: 'Both'
  },
  {
    id: 11,
    name: 'Lukas Schmidt',
    position: 'Defender',
    number: 5,
    image: 'https://images.unsplash.com/photo-1560610219-10785878e825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 40,
      goals: 3,
      assists: 2,
      tackles: 71,
      passAccuracy: 80,
    },
    quote: "Calculated risk makes champions.",
    age: 29,
    height: '6\'2"',
    nationality: 'Germany',
    strongFoot: 'Right'
  },
  {
    id: 12,
    name: 'Victor Okafor',
    position: 'Forward',
    number: 23,
    image: 'https://images.unsplash.com/photo-1616298583720-d13682b9abf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: {
      matches: 31,
      goals: 19,
      assists: 5,
      tackles: 8,
      passAccuracy: 73,
    },
    quote: "Goals are just the beginning.",
    age: 23,
    height: '6\'0"',
    nationality: 'Nigeria',
    strongFoot: 'Right'
  }
];

const Players = () => {
  const [positionFilter, setPositionFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('number');
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerData | null>(null);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [highlightedStat, setHighlightedStat] = useState<string | null>(null);

  const filteredPlayers = players.filter(player => {
    const matchesPosition = positionFilter === 'All' || player.position === positionFilter;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         player.nationality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch(sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'number':
        return a.number - b.number;
      case 'matches':
        return b.stats.matches - a.stats.matches;
      case 'goals':
        return b.stats.goals - a.stats.goals;
      case 'assists':
        return b.stats.assists - a.stats.assists;
      default:
        return a.number - b.number;
    }
  });

  const handleViewPlayerDetails = (playerId: number) => {
    const player = players.find(p => p.id === playerId) || null;
    setSelectedPlayer(player);
    setShowDetailModal(true);
  };
  
  const closePlayerDetails = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedPlayer(null), 300);
  };

  const getTeamHighlights = () => {
    const topScorer = [...players].sort((a, b) => b.stats.goals - a.stats.goals)[0];
    const topAssist = [...players].sort((a, b) => b.stats.assists - a.stats.assists)[0];
    const mostMatches = [...players].sort((a, b) => b.stats.matches - a.stats.matches)[0];
    
    return { topScorer, topAssist, mostMatches };
  };

  const { topScorer, topAssist, mostMatches } = getTeamHighlights();
  
  return (
    <PageTransition effect="slide-left">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Warriors</span><br></br>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6 relative inline-block">
              <span className="relative z-10">Our Players</span>
              <span className="absolute -left-1 -top-1 text-team-blue opacity-50 z-0">Our Players</span>
            </h1>
            <p className="text-white/80 text-lg">
              Meet the talented individuals who represent our team on the field,
              pushing boundaries and creating magic with every match.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-team-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-oswald uppercase mb-8 text-center">
            <span className="border-b-2 border-team-red pb-2">Team Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-gradient-to-br from-team-black to-team-gray/80 p-6 rounded-sm border border-team-red/20 transform hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setHighlightedStat('topScorer')}
              onMouseLeave={() => setHighlightedStat(null)}
              onClick={() => handleViewPlayerDetails(topScorer.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-team-red/90 rounded-full p-3">
                  <Trophy size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-oswald">Top Scorer</h3>
                  <p className="text-white/70 text-sm">{topScorer.name}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className={`text-4xl font-oswald ${highlightedStat === 'topScorer' ? 'text-team-red animate-pulse-glow' : 'text-white'}`}>
                  {topScorer.stats.goals}
                </div>
                <div className="text-white/50 text-sm uppercase">Goals</div>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-team-black to-team-gray/80 p-6 rounded-sm border border-team-blue/20 transform hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setHighlightedStat('topAssist')}
              onMouseLeave={() => setHighlightedStat(null)}
              onClick={() => handleViewPlayerDetails(topAssist.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-team-blue/90 rounded-full p-3">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-oswald">Assist Leader</h3>
                  <p className="text-white/70 text-sm">{topAssist.name}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className={`text-4xl font-oswald ${highlightedStat === 'topAssist' ? 'text-team-blue animate-pulse-glow' : 'text-white'}`}>
                  {topAssist.stats.assists}
                </div>
                <div className="text-white/50 text-sm uppercase">Assists</div>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-team-black to-team-gray/80 p-6 rounded-sm border border-white/10 transform hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setHighlightedStat('mostMatches')}
              onMouseLeave={() => setHighlightedStat(null)}
              onClick={() => handleViewPlayerDetails(mostMatches.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-oswald">Most Appearances</h3>
                  <p className="text-white/70 text-sm">{mostMatches.name}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className={`text-4xl font-oswald ${highlightedStat === 'mostMatches' ? 'text-white animate-pulse-glow' : 'text-white'}`}>
                  {mostMatches.stats.matches}
                </div>
                <div className="text-white/50 text-sm uppercase">Matches</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search players..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-team-black/30 border border-white/10 text-white/90 pl-10 pr-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-team-blue"
                />
              </div>
              
              <div className="flex space-x-4 w-full md:w-auto">
                <div className="relative w-full md:w-48">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Filter size={18} className="text-white/50" />
                  </div>
                  <select
                    value={positionFilter}
                    onChange={(e) => setPositionFilter(e.target.value)}
                    className="w-full bg-team-black/30 border border-white/10 text-white/90 pl-10 pr-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-team-blue appearance-none"
                  >
                    <option value="All">All Positions</option>
                    <option value="Forward">Forwards</option>
                    <option value="Midfielder">Midfielders</option>
                    <option value="Defender">Defenders</option>
                    <option value="Goalkeeper">Goalkeepers</option>
                  </select>
                </div>
                
                <div className="relative w-full md:w-48">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full bg-team-black/30 border border-white/10 text-white/90 px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-team-blue appearance-none"
                  >
                    <option value="number">Sort by Number</option>
                    <option value="name">Sort by Name</option>
                    <option value="matches">Sort by Matches</option>
                    <option value="goals">Sort by Goals</option>
                    <option value="assists">Sort by Assists</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6 text-white/70">
            Showing {sortedPlayers.length} player{sortedPlayers.length !== 1 ? 's' : ''}
            {positionFilter !== 'All' ? ` (${positionFilter}s)` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPlayers.map(player => (
              <PlayerCard 
                key={player.id} 
                player={player} 
                onViewDetails={handleViewPlayerDetails}
              />
            ))}
          </div>
          
          {sortedPlayers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/70 text-lg">No players match your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setPositionFilter('All');
                }}
                className="mt-4 bg-team-black/70 hover:bg-team-black px-4 py-2 text-white rounded-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-team-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">The Numbers</span>
              <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
                Team Statistics
              </h2>
              <p className="text-white/80">
                Our team's performance by the numbers. A snapshot of our achievements this season.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-team-gray/30 p-6 text-center rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-oswald text-team-red mb-2 animate-pulse-glow filter blur-[2px] hover:blur-none transition-all duration-500">28</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">Matches Played</div>
                </div>
                <div className="absolute inset-0 bg-team-gray/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="bg-team-gray/30 p-6 text-center rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-oswald text-team-red mb-2 animate-pulse-glow filter blur-[2px] hover:blur-none transition-all duration-500">45</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">Goals Scored</div>
                </div>
                <div className="absolute inset-0 bg-team-gray/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="bg-team-gray/30 p-6 text-center rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-oswald text-team-red mb-2 animate-pulse-glow filter blur-[2px] hover:blur-none transition-all duration-500">18</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">Clean Sheets</div>
                </div>
                <div className="absolute inset-0 bg-team-gray/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="bg-team-gray/30 p-6 text-center rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-oswald text-team-blue mb-2 animate-pulse-glow filter blur-[2px] hover:blur-none transition-all duration-500">3</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">Trophies Won</div>
                </div>
                <div className="absolute inset-0 bg-team-gray/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-team-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">History</span>
            <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
              Team Archive
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore our team's rich history, memorable moments, and the legacy we've built throughout the years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-team-red/30 transform md:translate-x-px"></div>
              
              <div className="space-y-12">
                {[2023, 2022, 2020, 2018, 2015].map((year, index) => (
                  <div key={year} className={`relative ${index % 2 === 0 ? 'md:pl-1/2' : 'md:pr-1/2 md:text-right md:ml-auto'}`}>
                    <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-team-red transform md:translate-x-[-8px]"></div>
                    
                    <div className="ml-6 md:ml-0 bg-team-gray/30 border border-white/10 p-5 rounded-md">
                      <div className="text-team-red text-xl font-oswald mb-2">{year}</div>
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {index === 0 ? 'National Cup Victory' :
                         index === 1 ? 'Regional Championship' :
                         index === 2 ? 'Team Reformation' :
                         index === 3 ? 'International Tournament' :
                         'Club Foundation'}
                      </h3>
                      <p className="text-white/70">
                        {index === 0 ? 'Won the national cup after a thrilling final that went to extra time.' :
                         index === 1 ? 'Dominated the regional championship, securing the title with two matches to spare.' :
                         index === 2 ? 'Major restructuring of the team with focus on youth development and modern playing style.' :
                         index === 3 ? 'First international tournament appearance, reaching the quarter-finals.' :
                         'The club was founded with a mission to build a competitive and community-focused team.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showDetailModal && selectedPlayer && (
        <PlayerDetail 
          player={selectedPlayer} 
          onClose={closePlayerDetails} 
        />
      )}
      
      <Footer />
    </PageTransition>
  );
};

export default Players;
