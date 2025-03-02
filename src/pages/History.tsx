
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Calendar, Star } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const History = () => {
  // Timeline items for our history
  const timelineItems = [
    {
      year: '2023',
      title: 'League Champions',
      description: 'Dominated the Regional Premier League with an incredible 28 wins out of 32 matches.',
      achievement: 'First team in league history to score over 100 goals in a single season.',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      year: '2022',
      title: 'City Cup Winners',
      description: 'Defeated arch-rivals City Warriors 3-1 in a thrilling final match that went into extra time.',
      achievement: 'Alex Rivera named Player of the Tournament with 6 goals.',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80'
    },
    {
      year: '2021',
      title: 'Stadium Renovation',
      description: 'Completed the stadium renovation, increasing capacity to 25,000 with state-of-the-art facilities.',
      achievement: 'Named "Most Modern Stadium" in the regional awards.',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      year: '2020',
      title: 'Academy Launch',
      description: 'Launched our youth academy to develop local talent and build for the future.',
      achievement: 'Five academy graduates now in the first team.',
      image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      year: '2018',
      title: 'Club Foundation',
      description: 'Arena FC was founded with a mission to bring exciting, passionate football to the community.',
      achievement: 'Started in the regional 3rd division with a squad of 18 players.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
  ];

  // Parallax effect references
  const timelineRefs = useRef([]);
  timelineRefs.current = timelineItems.map((_, i) => timelineRefs.current[i] ?? React.createRef());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      timelineRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
          
          if (isVisible) {
            // Calculate parallax effect based on scroll position
            const parallaxOffset = (rect.top - windowHeight * 0.5) * 0.1;
            ref.current.style.transform = `translateY(${parallaxOffset}px)`;
            ref.current.classList.add('opacity-100');
            ref.current.classList.remove('opacity-0');
          } else {
            ref.current.classList.add('opacity-0');
            ref.current.classList.remove('opacity-100');
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition effect="slide-left">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-team-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-4 mb-6">
              The Legacy
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Every victory, every challenge, every moment has shaped us into who we are today. 
              This is the story of our rise, our passion, and our relentless pursuit of greatness.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-team-black to-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-team-red/60"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.year}
                  ref={timelineRefs.current[index]}
                  className={`flex flex-col md:flex-row items-center mb-24 opacity-0 transition-all duration-1000 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-team-black border-4 border-team-red flex items-center justify-center">
                    <span className="text-white font-oswald font-bold">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 px-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-team-gray/50 border border-white/5 p-6 rounded-sm group hover:bg-team-gray transition-all duration-300 h-full">
                      <h3 className="text-white font-oswald text-2xl uppercase mb-3">{item.title}</h3>
                      <p className="text-white/70 mb-4">{item.description}</p>
                      <div className="flex items-center text-team-red mb-4 gap-2">
                        <Trophy size={18} />
                        <span className="text-white/90 text-sm">{item.achievement}</span>
                      </div>
                      <div className="aspect-video overflow-hidden rounded-sm">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="w-full md:w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Greatest Moments Section */}
      <section className="py-24 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">Unforgettable</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
              Greatest Moments
            </h2>
            <p className="text-white/70">
              Some moments transcend the game. These are the highlights that defined our journey and will live forever in our hearts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Moment 1 */}
            <div className="group relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80" 
                alt="City Cup Final"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center space-x-2 text-team-red mb-2">
                  <Calendar size={18} />
                  <span className="text-white/80 text-sm">June 15, 2022</span>
                </div>
                <h3 className="text-white font-oswald text-2xl mb-2">City Cup Final Victory</h3>
                <p className="text-white/70 mb-4">
                  Down 1-0 at halftime, our team pulled off an incredible comeback with 3 goals in the second half.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-team-red fill-team-red" />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">Legendary Moment</span>
                </div>
              </div>
            </div>
            
            {/* Moment 2 */}
            <div className="group relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                alt="Last Minute Goal"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center space-x-2 text-team-red mb-2">
                  <Calendar size={18} />
                  <span className="text-white/80 text-sm">November 23, 2022</span>
                </div>
                <h3 className="text-white font-oswald text-2xl mb-2">Rivera's 90+3' Winner</h3>
                <p className="text-white/70 mb-4">
                  Alex Rivera's spectacular bicycle kick in stoppage time secured our place in the playoffs.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-team-red fill-team-red" />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">Legendary Moment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Legacy Players Section */}
      <section className="py-24 bg-gradient-to-b from-team-black to-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-team-blue font-medium uppercase tracking-wider text-sm">The Icons</span>
            <h2 className="text-white text-4xl sm:text-5xl font-oswald uppercase mt-2 mb-6">
              Legacy Players
            </h2>
            <p className="text-white/70">
              These legends defined eras, inspired generations, and left an indelible mark on our club's history.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Legacy Player 1 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Michael Ramirez"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                9
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Forward (2018-2022)</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">Michael Ramirez</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    9
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">124</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">87</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">42</div>
                    <div className="text-white/50 text-xs uppercase">Assists</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Legacy Player 2 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Carlos Mendez"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                5
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Defender (2018-2021)</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">Carlos Mendez</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">118</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">12</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">8</div>
                    <div className="text-white/50 text-xs uppercase">Assists</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Legacy Player 3 */}
            <div className="relative overflow-hidden rounded-sm group h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1539051220964-c88e45831d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Sarah Johnson"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 font-oswald text-7xl font-bold opacity-30 text-white z-10">
                20
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-team-red uppercase text-sm font-medium tracking-wider">Midfielder (2018-2022)</span>
                    <h3 className="text-white font-oswald text-2xl mt-1">Sarah Johnson</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-team-red flex items-center justify-center text-white font-bold">
                    20
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">132</div>
                    <div className="text-white/50 text-xs uppercase">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">34</div>
                    <div className="text-white/50 text-xs uppercase">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-oswald text-2xl">68</div>
                    <div className="text-white/50 text-xs uppercase">Assists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-team-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl sm:text-4xl font-oswald uppercase mb-6">
              Be Part of Our Future History
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join us for the next chapter in our journey. Experience the passion and intensity of Arena FC live.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/schedule" className="bg-white text-team-red font-oswald uppercase tracking-wider py-3 px-8 text-lg inline-flex items-center space-x-2 hover:bg-white/90 transition-colors">
                <span>View Match Schedule</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default History;
