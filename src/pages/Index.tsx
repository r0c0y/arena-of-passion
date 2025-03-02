
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Clock, MapPin, Trophy } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import CountdownTimer from '@/components/CountdownTimer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const heroVideo = "https://player.vimeo.com/external/371433846.sd.mp4?s=236b1eb6b499a4232a8e79808968d79cde567c2d&profile_id=139&oauth2_token_id=57447761";

const Index = () => {
  const nextMatchDate = new Date();
  nextMatchDate.setDate(nextMatchDate.getDate() + 3); // Next match in 3 days

  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-team-red uppercase tracking-widest text-sm sm:text-base font-medium mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Welcome to the Arena
            </span>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-oswald uppercase tracking-wide mb-6 text-outline max-w-4xl mx-auto text-glitch"
              data-text="Football is More Than a Game—It's Who We Are"
            >
              Football is More Than a Game—It's Who We Are
            </h1>
            
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Experience the passion, intensity, and pure adrenaline of Arena FC. Join us as we paint moments through the game and push beyond limits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/players" className="btn-primary w-full sm:w-auto">
                Meet the Team
              </Link>
              <Link to="/schedule" className="btn-secondary w-full sm:w-auto">
                View Matches
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
            <a href="#next-match" className="text-white/70 hover:text-white transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Next Match Section */}
      <section id="next-match" className="bg-team-black py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Next Match</span>
                <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
                  Arena FC 
                  <span className="px-3 text-team-red">vs</span> 
                  City Warriors
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-white/80">
                    <Clock className="text-team-red" size={20} />
                    <span>Friday, May 20, 2023 | 7:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPin className="text-team-red" size={20} />
                    <span>Arena Stadium, Sportsville</span>
                  </div>
                </div>
                
                <a href="#" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Tickets</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <div className="text-center mb-6">
                  <h3 className="text-white text-xl font-oswald uppercase">Countdown to Kickoff</h3>
                </div>
                <CountdownTimer targetDate={nextMatchDate} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Players Section */}
      <section className="py-24 bg-gradient-to-b from-team-black to-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Warriors</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
              Meet Our Star Players
            </h2>
            <p className="text-white/70">
              The heart and soul of Arena FC. These warriors bring their passion, skill, and determination to every match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Player 1 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Alex Rivera"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                10
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Forward</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">Alex Rivera</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    10
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">42</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">18</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">15</div>
                    <div className="text-white/50 text-xs uppercase">Assists</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Player 2 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                alt="Marcus Johnson"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                8
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Midfielder</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">Marcus Johnson</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    8
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">38</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">9</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">22</div>
                    <div className="text-white/50 text-xs uppercase">Assists</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Player 3 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80" 
                alt="David Chen"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                1
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Goalkeeper</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">David Chen</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">40</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">0</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">18</div>
                    <div className="text-white/50 text-xs uppercase">Clean Sheets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/players" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Players</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-24 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-blue font-medium uppercase tracking-wider text-sm">The Heart & Soul</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-8">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-lg text-white/80">
              <p>
                <span className="text-team-red">Intuition. Vision. Hunger.</span> These are the foundations of our game. We don't just play football—we live it.
              </p>
              <p>
                At Arena FC, we see football as an artistry of movement—painting moments through the game that stay etched in memories forever.
              </p>
              <p>
                We find silence in chaos, flowing with the game, and pushing beyond limits. This isn't just about winning; it's about making every match a masterpiece.
              </p>
              <p>
                Our deep love for football makes every tackle, every pass, every goal feel like the greatest thing ever.
              </p>
            </div>
            
            <Link to="/about" className="btn-primary mt-10 inline-flex items-center space-x-2">
              <span>Our Full Story</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Recent Results & Achievements */}
      <section className="py-24 bg-gradient-to-b from-team-black to-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Record</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
              Recent Achievements
            </h2>
            <p className="text-white/70">
              A testament to our dedication, skill, and teamwork. Every victory is a story of passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <div className="bg-team-gray/50 border border-white/5 p-6 rounded-sm group hover:bg-team-gray transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-team-red">
                  <Trophy size={36} />
                </div>
                <div>
                  <h3 className="text-white font-oswald text-xl uppercase mb-2">League Champions</h3>
                  <p className="text-white/70">
                    Dominated the Regional Premier League with 28 wins out of 32 matches.
                  </p>
                  <span className="text-team-blue text-sm block mt-2">2023 Season</span>
                </div>
              </div>
            </div>
            
            {/* Achievement 2 */}
            <div className="bg-team-gray/50 border border-white/5 p-6 rounded-sm group hover:bg-team-gray transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-team-red">
                  <Trophy size={36} />
                </div>
                <div>
                  <h3 className="text-white font-oswald text-xl uppercase mb-2">City Cup Winners</h3>
                  <p className="text-white/70">
                    Defeated arch-rivals City Warriors 3-1 in a thrilling final match.
                  </p>
                  <span className="text-team-blue text-sm block mt-2">2022 Season</span>
                </div>
              </div>
            </div>
            
            {/* Achievement 3 */}
            <div className="bg-team-gray/50 border border-white/5 p-6 rounded-sm group hover:bg-team-gray transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-team-red">
                  <Trophy size={36} />
                </div>
                <div>
                  <h3 className="text-white font-oswald text-xl uppercase mb-2">Player Recognition</h3>
                  <p className="text-white/70">
                    Alex Rivera named Player of the Year with 18 goals and 15 assists.
                  </p>
                  <span className="text-team-blue text-sm block mt-2">2023 Season</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/history" className="btn-secondary inline-flex items-center space-x-2">
              <span>View Full History</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 bg-team-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mb-6">
              Join Us For The Next Match
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Experience the passion, intensity, and pure adrenaline of Arena FC. Be part of our journey.
            </p>
            <a href="#" className="bg-white text-team-red font-oswald uppercase tracking-wider py-3 px-8 text-lg inline-flex items-center space-x-2 hover:bg-white/90 transition-colors">
              <span>Get Tickets Now</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
