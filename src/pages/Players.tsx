
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import PlayerCard from '@/components/PlayerCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock Player Data
const players = [
  {
    id: 1,
    name: 'Alex Rivera',
    position: 'Forward',
    number: 10,
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    stats: {
      matches: 42,
      goals: 18,
      assists: 15,
    },
    quote: "Every match is a new canvas to paint on."
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    position: 'Midfielder',
    number: 8,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
    stats: {
      matches: 38,
      goals: 9,
      assists: 22,
    },
    quote: "The midfield is where art meets science."
  },
  {
    id: 3,
    name: 'David Chen',
    position: 'Goalkeeper',
    number: 1,
    image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80',
    stats: {
      matches: 40,
      goals: 0,
      assists: 0,
    },
    quote: "Between the posts is where legends are made."
  },
  {
    id: 4,
    name: 'Jordan Scott',
    position: 'Defender',
    number: 4,
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    stats: {
      matches: 36,
      goals: 2,
      assists: 3,
    },
    quote: "Defense is the foundation of victory."
  },
  {
    id: 5,
    name: 'Carlos Mendez',
    position: 'Forward',
    number: 9,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    stats: {
      matches: 38,
      goals: 15,
      assists: 7,
    },
    quote: "I live for the goals, I breathe for the team."
  },
  {
    id: 6,
    name: 'Kieran Walsh',
    position: 'Midfielder',
    number: 6,
    image: 'https://images.unsplash.com/photo-1580456596733-5d9f4dc6b9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80',
    stats: {
      matches: 40,
      goals: 5,
      assists: 12,
    },
    quote: "Control the midfield, control the game."
  },
  {
    id: 7,
    name: 'Jamal Wilson',
    position: 'Defender',
    number: 2,
    image: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80',
    stats: {
      matches: 41,
      goals: 0,
      assists: 4,
    },
    quote: "No one passes my line without permission."
  },
  {
    id: 8,
    name: 'Liam O'Connor',
    position: 'Midfielder',
    number: 11,
    image: 'https://images.unsplash.com/photo-1546608235-d0a2818a44e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    stats: {
      matches: 35,
      goals: 7,
      assists: 9,
    },
    quote: "Create, inspire, dominate."
  },
  {
    id: 9,
    name: 'Victor Santos',
    position: 'Defender',
    number: 5,
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    stats: {
      matches: 39,
      goals: 1,
      assists: 2,
    },
    quote: "Defense wins championships."
  },
];

// Position filter options
const positions = ['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

const Players = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPlayers = activeFilter === 'All' 
    ? players 
    : players.filter(player => player.position === activeFilter);

  return (
    <PageTransition effect="slide-left">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Warriors</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6">
              Our Players
            </h1>
            <p className="text-white/80 text-lg">
              Meet the athletes who bring passion, skill, and determination to every match. 
              These warriors are the heart and soul of Arena FC.
            </p>
          </div>
        </div>
      </section>
      
      {/* Player Filter Section */}
      <section className="py-12 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {positions.map((position) => (
              <button
                key={position}
                className={`px-6 py-2 font-oswald uppercase tracking-wider text-sm transition-all duration-300 ${
                  activeFilter === position
                    ? 'bg-team-red text-white'
                    : 'bg-team-gray/50 text-white/70 hover:bg-team-gray hover:text-white'
                }`}
                onClick={() => setActiveFilter(position)}
              >
                {position}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Statistics Section */}
      <section className="py-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-team-blue font-medium uppercase tracking-wider text-sm">The Numbers</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
              Team Statistics
            </h2>
            <p className="text-white/70">
              The data behind our success. These numbers reflect our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-team-gray/30 p-6 text-center rounded-sm">
              <div className="text-team-red font-oswald text-5xl font-bold mb-2">28</div>
              <div className="text-white uppercase text-sm tracking-wider">Wins</div>
            </div>
            <div className="bg-team-gray/30 p-6 text-center rounded-sm">
              <div className="text-team-red font-oswald text-5xl font-bold mb-2">72</div>
              <div className="text-white uppercase text-sm tracking-wider">Goals Scored</div>
            </div>
            <div className="bg-team-gray/30 p-6 text-center rounded-sm">
              <div className="text-team-red font-oswald text-5xl font-bold mb-2">18</div>
              <div className="text-white uppercase text-sm tracking-wider">Clean Sheets</div>
            </div>
            <div className="bg-team-gray/30 p-6 text-center rounded-sm">
              <div className="text-team-red font-oswald text-5xl font-bold mb-2">3</div>
              <div className="text-white uppercase text-sm tracking-wider">Trophies Won</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-team-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mb-6">
              Watch Our Players In Action
            </h2>
            <p className="text-white/90 mb-8">
              Don't miss our next match where you can see these warriors showcase their skills live.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="btn-primary">
                Get Tickets
              </a>
              <a href="#" className="border-2 border-white text-white font-oswald uppercase tracking-wider py-3 px-6 inline-block hover:bg-white/10 transition-colors">
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Players;
