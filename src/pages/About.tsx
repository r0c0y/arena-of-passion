
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <PageTransition effect="fade">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">The Heart & Soul</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6">
              Who We Are
            </h1>
            <p className="text-white/80 text-lg">
              Football is more than just a game—it's intuition, vision, and hunger. It's art in motion, silence in chaos, and pushing beyond limits.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Our Philosophy</span>
                <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
                  The Spirit of the Game
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 mb-4">
                    For us, football is more than a sport—it's a canvas where we paint our passion, determination, and love for the game. Every match is an opportunity to create something beautiful and meaningful.
                  </p>
                  <p className="text-white/80 mb-4">
                    We believe in playing with heart, pushing beyond our limits, and embracing the silence in chaos. Our team thrives on intuition, vision, and the hunger to excel.
                  </p>
                  <p className="text-white/80">
                    When we step onto the field, we're not just playing football—we're expressing ourselves, challenging our boundaries, and honoring the legacy of those who came before us.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Team Philosophy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-team-red p-4 md:p-6">
                  <p className="text-white italic font-medium text-lg md:text-xl">
                    "Football is art in motion."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-team-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">What We Stand For</span>
            <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-team-gray/30 p-6 border-t-2 border-team-red">
              <h3 className="text-white text-xl font-oswald uppercase mb-4">Passion</h3>
              <p className="text-white/80">
                We play with heart and emotion. Every match is an opportunity to express our love for the game.
              </p>
            </div>
            
            <div className="bg-team-gray/30 p-6 border-t-2 border-team-blue">
              <h3 className="text-white text-xl font-oswald uppercase mb-4">Endurance</h3>
              <p className="text-white/80">
                We push beyond our limits, always striving to be better and stronger than we were yesterday.
              </p>
            </div>
            
            <div className="bg-team-gray/30 p-6 border-t-2 border-team-red">
              <h3 className="text-white text-xl font-oswald uppercase mb-4">Unity</h3>
              <p className="text-white/80">
                We are stronger together. Our success comes from our brotherhood and unity on and off the field.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Story Video Section */}
      <section className="py-16 bg-team-gray/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mt-2 mb-6">
              The Team's Story
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Listen to our captain talk about what makes this team special and the journey we've been on together.
            </p>
            
            <div className="relative aspect-video bg-team-black/50 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-team-red rounded-full flex items-center justify-center hover:bg-team-red/80 transition-colors">
                  <span className="sr-only">Play video</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1593&q=80" 
                alt="Team Story Video Thumbnail"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
