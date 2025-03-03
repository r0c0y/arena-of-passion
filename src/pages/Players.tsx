
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlayerCard from '@/components/PlayerCard';

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

// Sample player data
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
  }
];

const Players = () => {
  const [positionFilter, setPositionFilter] = useState<string>('All');
  
  // Filter players based on position
  const filteredPlayers = positionFilter === 'All' 
    ? players 
    : players.filter(player => player.position === positionFilter);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-team-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Anime-style geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#9b87f5]/20 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#0EA5E9]/20 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-[#D946EF]/20 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text font-medium uppercase tracking-wider text-sm">The Warriors</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6 text-shadow">
              <span className="inline-block bg-gradient-to-r from-white via-[#0EA5E9] to-white text-transparent bg-clip-text">Our Players</span>
            </h1>
            <p className="text-white/80 text-lg">
              Meet the talented individuals who represent our team on the field,
              pushing boundaries and creating magic with every match.
            </p>
          </div>
        </div>
      </section>
      
      {/* Players Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setPositionFilter('All')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                positionFilter === 'All' 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-white' 
                  : 'bg-black/50 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm'
              }`}
            >
              All Players
            </button>
            <button 
              onClick={() => setPositionFilter('Forward')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                positionFilter === 'Forward' 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-white' 
                  : 'bg-black/50 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm'
              }`}
            >
              Forwards
            </button>
            <button 
              onClick={() => setPositionFilter('Midfielder')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                positionFilter === 'Midfielder' 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-white' 
                  : 'bg-black/50 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm'
              }`}
            >
              Midfielders
            </button>
            <button 
              onClick={() => setPositionFilter('Defender')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                positionFilter === 'Defender' 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-white' 
                  : 'bg-black/50 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm'
              }`}
            >
              Defenders
            </button>
            <button 
              onClick={() => setPositionFilter('Goalkeeper')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                positionFilter === 'Goalkeeper' 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-white' 
                  : 'bg-black/50 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm'
              }`}
            >
              Goalkeepers
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Stats Section with anime-inspired design */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1F2C]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 rounded-full bg-[#D946EF]/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-[#0EA5E9]/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] text-transparent bg-clip-text font-medium uppercase tracking-wider text-sm">The Numbers</span>
              <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6 text-shadow">
                Team Statistics
              </h2>
              <p className="text-white/80">
                Our team's performance by the numbers. A snapshot of our achievements this season.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 text-center rounded-md border border-white/10 hover:border-[#9b87f5]/50 transition-colors">
                <div className="text-4xl md:text-5xl font-oswald bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-transparent bg-clip-text mb-2 animate-pulse-glow">28</div>
                <div className="text-white/70 uppercase tracking-wider text-sm">Matches Played</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 text-center rounded-md border border-white/10 hover:border-[#9b87f5]/50 transition-colors">
                <div className="text-4xl md:text-5xl font-oswald bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-transparent bg-clip-text mb-2 animate-pulse-glow">45</div>
                <div className="text-white/70 uppercase tracking-wider text-sm">Goals Scored</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 text-center rounded-md border border-white/10 hover:border-[#9b87f5]/50 transition-colors">
                <div className="text-4xl md:text-5xl font-oswald bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] text-transparent bg-clip-text mb-2 animate-pulse-glow">18</div>
                <div className="text-white/70 uppercase tracking-wider text-sm">Clean Sheets</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 text-center rounded-md border border-white/10 hover:border-[#9b87f5]/50 transition-colors">
                <div className="text-4xl md:text-5xl font-oswald bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text mb-2 animate-pulse-glow">3</div>
                <div className="text-white/70 uppercase tracking-wider text-sm">Trophies Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Players;
