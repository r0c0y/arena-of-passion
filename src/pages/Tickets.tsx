
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Tickets = () => {
  const { toast } = useToast();
  const [selectedMatch, setSelectedMatch] = useState(0);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [ticketType, setTicketType] = useState('standard');
  
  const upcomingMatches = [
    {
      id: 1,
      opponent: 'City Warriors',
      date: 'May 20, 2023',
      time: '7:30 PM',
      location: 'Arena Stadium, Sportsville',
      price: { standard: 25, premium: 45, vip: 80 }
    },
    {
      id: 2,
      opponent: 'Metro Tigers',
      date: 'June 5, 2023',
      time: '6:00 PM',
      location: 'Arena Stadium, Sportsville',
      price: { standard: 30, premium: 50, vip: 95 }
    },
    {
      id: 3,
      opponent: 'Riverside United',
      date: 'June 18, 2023',
      time: '7:00 PM',
      location: 'Riverside Stadium, Rivertown',
      price: { standard: 35, premium: 55, vip: 100 }
    },
  ];
  
  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    
    const match = upcomingMatches[selectedMatch];
    const totalPrice = match.price[ticketType as keyof typeof match.price] * ticketQuantity;
    
    toast({
      title: "Tickets Reserved!",
      description: `${ticketQuantity} ${ticketType} ticket(s) for Arena FC vs ${match.opponent}. Total: $${totalPrice}`,
      variant: "default",
    });
  };
  
  return (
    <PageTransition effect="fade">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">Support Arena FC</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6">
              Get Your Tickets
            </h1>
            <p className="text-white/80 text-lg">
              Secure your spot at our upcoming matches and experience the thrill of Arena FC live!
            </p>
          </div>
        </div>
      </section>
      
      {/* Ticket Purchase Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Match Selection */}
              <div>
                <h2 className="text-white text-3xl font-oswald uppercase mb-6">Upcoming Matches</h2>
                <div className="space-y-4">
                  {upcomingMatches.map((match, index) => (
                    <div 
                      key={match.id}
                      className={`p-4 rounded-sm cursor-pointer transition-all duration-300 ${selectedMatch === index ? 'bg-team-red/20 border border-team-red' : 'bg-team-gray/50 border border-white/10 hover:bg-team-gray'}`}
                      onClick={() => setSelectedMatch(index)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-white font-oswald text-xl">
                            Arena FC vs {match.opponent}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center text-white/70">
                              <Calendar size={16} className="mr-1" />
                              <span>{match.date}, {match.time}</span>
                            </div>
                            <div className="flex items-center text-white/70">
                              <MapPin size={16} className="mr-1" />
                              <span>{match.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-team-red font-oswald">Select</span>
                          <ArrowRight size={16} className={selectedMatch === index ? 'text-team-red' : 'text-white/50'} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ticket Form */}
              <div>
                <h2 className="text-white text-3xl font-oswald uppercase mb-6">Select Tickets</h2>
                
                {selectedMatch !== null && (
                  <form onSubmit={handlePurchase} className="space-y-6 bg-team-gray/50 border border-white/10 p-6 rounded-sm">
                    <div>
                      <h3 className="text-white font-oswald text-xl mb-4">
                        Arena FC vs {upcomingMatches[selectedMatch].opponent}
                      </h3>
                      <div className="flex items-center space-x-4 text-white/70 mb-2">
                        <Calendar size={16} />
                        <span>{upcomingMatches[selectedMatch].date}, {upcomingMatches[selectedMatch].time}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-white/70">
                        <MapPin size={16} />
                        <span>{upcomingMatches[selectedMatch].location}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="ticket-type" className="block text-white/80 mb-2">Ticket Type</label>
                      <select
                        id="ticket-type"
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                        className="w-full bg-team-black/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-team-blue"
                      >
                        <option value="standard">Standard - ${upcomingMatches[selectedMatch].price.standard}</option>
                        <option value="premium">Premium - ${upcomingMatches[selectedMatch].price.premium}</option>
                        <option value="vip">VIP - ${upcomingMatches[selectedMatch].price.vip}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="block text-white/80 mb-2">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        max="10"
                        value={ticketQuantity}
                        onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                        className="w-full bg-team-black/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-team-blue"
                      />
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-white mb-2">
                        <span>Price:</span>
                        <span>${upcomingMatches[selectedMatch].price[ticketType as keyof typeof upcomingMatches[selectedMatch].price]} x {ticketQuantity}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total:</span>
                        <span>${upcomingMatches[selectedMatch].price[ticketType as keyof typeof upcomingMatches[selectedMatch].price] * ticketQuantity}</span>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                      <Ticket size={18} />
                      <span>Purchase Tickets</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Tickets;
