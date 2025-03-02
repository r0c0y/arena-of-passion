
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, Star, Clock } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Archive = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string>("2023");
  
  // Timeline scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
          
          if (isVisible) {
            item.classList.add('timeline-visible');
            setActiveYear(item.getAttribute('data-year') || "2023");
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const timelineData = [
    {
      year: "2023",
      title: "League Champions",
      description: "Arena FC dominates the Regional Premier League with 28 wins out of 32 matches.",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      achievements: [
        "League Champions",
        "Alex Rivera named Player of the Year",
        "Record-breaking 88 goals scored in one season"
      ]
    },
    {
      year: "2022",
      title: "City Cup Winners",
      description: "Defeated arch-rivals City Warriors 3-1 in a thrilling final match witnessed by 30,000 fans.",
      image: "https://images.unsplash.com/photo-1540547184844-8191c0223ab7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      achievements: [
        "City Cup Winners",
        "Marcus Johnson wins Golden Boot",
        "New club record: 15-match winning streak"
      ]
    },
    {
      year: "2021",
      title: "New Stadium Opening",
      description: "Inaugurated our state-of-the-art Arena Stadium with a friendly match against international champions.",
      image: "https://images.unsplash.com/photo-1521311119587-20e7c61ae2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2234&q=80",
      achievements: [
        "New 35,000-capacity stadium completed",
        "Reached Cup semi-finals",
        "David Chen sets record with 20 clean sheets"
      ]
    },
    {
      year: "2019",
      title: "Club Founding",
      description: "Arena FC was founded with a vision to become a powerhouse in regional football while nurturing local talent.",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      achievements: [
        "Club officially founded",
        "First team assembled",
        "First competitive match played"
      ]
    }
  ];
  
  const memoriesData = [
    {
      id: 1,
      title: "Last-Minute Winner Against Rivals",
      date: "October 15, 2022",
      image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      description: "Alex Rivera scores in the 94th minute to secure a dramatic victory against our arch-rivals."
    },
    {
      id: 2,
      title: "Trophy Parade Through City",
      date: "May 22, 2023",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80",
      description: "Thousands of fans line the streets to celebrate our championship victory."
    },
    {
      id: 3,
      title: "David Chen's Triple Save",
      date: "April 8, 2022",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2149&q=80",
      description: "Our goalkeeper makes three consecutive incredible saves in the cup semi-final."
    },
    {
      id: 4,
      title: "Breaking Ground for New Stadium",
      date: "March 12, 2020",
      image: "https://images.unsplash.com/photo-1518194739963-6629d4233ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80",
      description: "The ceremonial first dig for our new home, with fans and city officials in attendance."
    },
    {
      id: 5,
      title: "Youth Academy Inaugural Class",
      date: "August 5, 2021",
      image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "The first generation of our youth academy players begin their journey."
    },
    {
      id: 6,
      title: "First International Friendly",
      date: "July 18, 2020",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2236&q=80",
      description: "Arena FC hosts its first international friendly against a European club."
    }
  ];
  
  const legendsData = [
    {
      id: 1,
      name: "Michael Thompson",
      position: "Striker",
      years: "2019-2021",
      image: "https://images.unsplash.com/photo-1533020708741-a09614723e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      achievements: "Club's first captain • 45 goals in 60 appearances • Led us to our first trophy"
    },
    {
      id: 2,
      name: "Carlos Mendez",
      position: "Midfielder",
      years: "2019-2022",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
      achievements: "Record 40 assists • Set piece specialist • Fan favorite"
    },
    {
      id: 3,
      name: "James Wilson",
      position: "Defender",
      years: "2019-2023",
      image: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
      achievements: "Iron man with 150 consecutive appearances • Team-record 50 tackles in one season"
    }
  ];
  
  return (
    <PageTransition effect="fade">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524769011490-f01e7c3e20e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6 text-glitch" data-text="The Arena FC Archive">
              The Arena FC Archive
            </h1>
            <p className="text-white/80 text-lg">
              Relive the moments that defined us. From humble beginnings to championship glory, this is our story.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-team-gray/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Our History</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                The Timeline
              </h2>
              <div className="flex justify-center space-x-4 mt-8">
                {timelineData.map((item) => (
                  <button
                    key={item.year}
                    className={`px-4 py-2 rounded-sm transition-all duration-300 ${
                      activeYear === item.year 
                        ? 'bg-team-red text-white' 
                        : 'bg-team-gray/50 text-white/70 hover:bg-team-gray/70'
                    }`}
                    onClick={() => {
                      setActiveYear(item.year);
                      const element = document.querySelector(`[data-year="${item.year}"]`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative" ref={timelineRef}>
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-team-red via-team-blue to-team-red transform -translate-x-1/2 z-0"></div>
              
              {timelineData.map((item, index) => (
                <div 
                  key={item.year} 
                  data-year={item.year}
                  className={`timeline-item opacity-0 transition-all duration-1000 translate-y-10 mb-16 relative ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
                  }`}
                >
                  <div className="md:max-w-xl bg-team-gray/50 rounded-sm overflow-hidden border border-white/10 hover:border-team-red/50 transition-all duration-300">
                    <div className="relative h-60 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <span className="inline-block bg-team-red text-white text-xl font-oswald px-4 py-1 mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-white font-oswald text-2xl">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white/80 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-team-blue font-oswald text-lg">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center text-white/80">
                              <Star className="text-team-red mr-2 shrink-0" size={16} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-[3.75rem] h-5 w-5 bg-team-red rounded-full border-4 border-black transform -translate-x-1/2 z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Memory Wall Section */}
      <section className="py-16 bg-team-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-red font-medium uppercase tracking-wider text-sm">Unforgettable Moments</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                Memory Wall
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                The moments that took our breath away. The highs, the challenges, and everything that made us who we are today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memoriesData.map((memory) => (
                <div 
                  key={memory.id}
                  className="bg-team-gray/30 border border-white/5 overflow-hidden rounded-sm group hover:bg-team-gray/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={memory.image} 
                      alt={memory.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <div className="flex items-center space-x-2 text-white/70 text-sm mb-1">
                        <Calendar size={14} className="text-team-red" />
                        <span>{memory.date}</span>
                      </div>
                      <h3 className="text-white font-oswald text-xl">{memory.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/80">{memory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Club Legends Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Those Who Came Before</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                Club Legends
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                The players who laid the foundation and set the standards for Arena FC.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {legendsData.map((legend) => (
                <div
                  key={legend.id}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative group"
                >
                  <div className="bg-team-gray/30 rounded-sm overflow-hidden h-full">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={legend.image}
                        alt={legend.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <div className="mb-2">
                          <span className="bg-team-red text-sm px-3 py-1 inline-block">{legend.position}</span>
                        </div>
                        <h3 className="text-2xl font-oswald mb-1">{legend.name}</h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <Clock size={16} className="mr-2" />
                          <span>{legend.years}</span>
                        </div>
                        
                        <div className="pt-4 text-white/90">
                          <p className="text-sm">{legend.achievements}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/history" className="btn-secondary inline-flex items-center space-x-2">
                <span>View Full Team History</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Merchandise Banner */}
      <section className="py-8 bg-team-red overflow-hidden">
        <div className="relative whitespace-nowrap animate-marquee">
          <div className="inline-block">
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Official Arena FC Merchandise Coming Soon</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Jerseys</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">T-shirts</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Scarves</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Collectibles</span>
            <span className="text-white/70 px-8">•</span>
          </div>
          <div className="inline-block">
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Official Arena FC Merchandise Coming Soon</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Jerseys</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">T-shirts</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Scarves</span>
            <span className="text-white/70 px-8">•</span>
            <span className="text-white font-oswald text-2xl uppercase tracking-wider px-8">Collectibles</span>
            <span className="text-white/70 px-8">•</span>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Archive;
