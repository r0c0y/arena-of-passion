
import React, { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatchCard from '@/components/MatchCard';
import CountdownTimer from '@/components/CountdownTimer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Match Data
const upcomingMatches = [
  {
    id: 1,
    homeTeam: 'Arena FC',
    awayTeam: 'City Warriors',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    time: '19:30',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: true,
  },
  {
    id: 2,
    homeTeam: 'Metro Tigers',
    awayTeam: 'Arena FC',
    date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    time: '15:00',
    location: 'Tiger Park, Metro City',
    isUpcoming: true,
  },
  {
    id: 3,
    homeTeam: 'Arena FC',
    awayTeam: 'United Stars',
    date: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000), // 17 days from now
    time: '20:00',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: true,
  },
  {
    id: 4,
    homeTeam: 'Riverside FC',
    awayTeam: 'Arena FC',
    date: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000), // 24 days from now
    time: '16:30',
    location: 'Riverside Stadium, Riverside',
    isUpcoming: true,
  },
  {
    id: 5,
    homeTeam: 'Arena FC',
    awayTeam: 'Northern Lions',
    date: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000), // 31 days from now
    time: '19:30',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: true,
  },
];

const pastMatches = [
  {
    id: 6,
    homeTeam: 'Arena FC',
    awayTeam: 'Rival United',
    homeScore: 3,
    awayScore: 1,
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    time: '19:30',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: false,
  },
  {
    id: 7,
    homeTeam: 'Metro Tigers',
    awayTeam: 'Arena FC',
    homeScore: 0,
    awayScore: 2,
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    time: '15:00',
    location: 'Tiger Park, Metro City',
    isUpcoming: false,
  },
  {
    id: 8,
    homeTeam: 'Arena FC',
    awayTeam: 'City Warriors',
    homeScore: 4,
    awayScore: 0,
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 21 days ago
    time: '20:00',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: false,
  },
  {
    id: 9,
    homeTeam: 'Riverside FC',
    awayTeam: 'Arena FC',
    homeScore: 1,
    awayScore: 1,
    date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000), // 28 days ago
    time: '16:30',
    location: 'Riverside Stadium, Riverside',
    isUpcoming: false,
  },
  {
    id: 10,
    homeTeam: 'Arena FC',
    awayTeam: 'Northern Lions',
    homeScore: 2,
    awayScore: 0,
    date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000), // 35 days ago
    time: '19:30',
    location: 'Arena Stadium, Sportsville',
    isUpcoming: false,
  },
];

const Schedule = () => {
  const nextMatch = upcomingMatches[0];
  
  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510051640316-cee0293bb343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Battles</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6">
              Match Schedule
            </h1>
            <p className="text-white/80 text-lg">
              Every match is a new battle. View our upcoming fixtures and past results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Next Match Countdown Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Next Match</span>
              <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
                {nextMatch.homeTeam} 
                <span className="text-team-red px-3">vs</span> 
                {nextMatch.awayTeam}
              </h2>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70 mb-8">
                <div className="flex items-center space-x-2">
                  <span>
                    {nextMatch.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{nextMatch.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{nextMatch.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <CountdownTimer targetDate={nextMatch.date} />
            </div>
            
            <div className="text-center">
              <a href="#" className="btn-primary">
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Match Schedule Tabs */}
      <section className="py-16 bg-team-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <TabsList className="inline-flex bg-team-gray/30 p-1">
                <TabsTrigger 
                  value="upcoming" 
                  className="px-8 py-3 text-white/70 font-oswald uppercase data-[state=active]:bg-team-red data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger 
                  value="past" 
                  className="px-8 py-3 text-white/70 font-oswald uppercase data-[state=active]:bg-team-red data-[state=active]:text-white"
                >
                  Past Results
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="space-y-6 mt-6">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6 mt-6">
              {pastMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Venue Information */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="text-team-red font-medium uppercase tracking-wider text-sm">Home Ground</span>
                <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
                  Arena Stadium
                </h2>
                <p className="text-white/80 mb-4">
                  Our home ground is where the magic happens. With a capacity of 25,000 passionate fans, 
                  the atmosphere at Arena Stadium is unmatched.
                </p>
                <div className="space-y-4 text-white/70">
                  <div className="flex items-start space-x-2">
                    <span className="font-medium">Address:</span>
                    <span>123 Stadium Road, Sportsville, SP 12345</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium">Capacity:</span>
                    <span>25,000</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium">Facilities:</span>
                    <span>Premium seating, concession stands, team store, hospitality lounges</span>
                  </div>
                </div>
                <a href="#" className="btn-secondary mt-8 inline-block">
                  Stadium Information
                </a>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="rounded-sm overflow-hidden h-80 md:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Arena Stadium"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Schedule;
