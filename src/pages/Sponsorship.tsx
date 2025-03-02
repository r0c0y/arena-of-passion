
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Users, Zap, Globe, TrendingUp, Shield } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sponsorship = () => {
  return (
    <PageTransition effect="fade">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-team-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-team-red font-medium uppercase tracking-wider text-sm">Join Our Team</span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-oswald uppercase mt-2 mb-6">
              Sponsor & Support
            </h1>
            <p className="text-white/80 text-lg">
              Be part of our journey by supporting Arena FC through sponsorships and donations. Together, we can achieve greatness.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sponsorship Packages Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Partnering Options</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                Sponsorship Packages
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Align your brand with Arena FC and reach thousands of passionate fans while supporting the development of football in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bronze Package */}
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm flex flex-col h-full hover:border-team-red/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-white/60 uppercase text-sm tracking-wider">Bronze Sponsor</span>
                  <h3 className="text-white font-oswald text-3xl mt-1">$5,000</h3>
                  <p className="text-white/70 mt-2">Perfect for small businesses looking to start a partnership.</p>
                </div>
                
                <div className="space-y-3 my-6 flex-grow">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-red shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Logo on official team website</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-red shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Mentions in 2 social media posts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-red shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Small logo on match program</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-red shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">2 VIP match tickets per season</span>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-secondary w-full mt-auto inline-flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              {/* Silver Package */}
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm flex flex-col h-full relative group hover:border-team-blue/50 transition-all duration-300">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-team-blue text-white text-sm font-medium py-1 px-4 uppercase tracking-wider">
                    Most Popular
                  </div>
                </div>
                
                <div className="mb-4 pt-2">
                  <span className="text-white/60 uppercase text-sm tracking-wider">Silver Sponsor</span>
                  <h3 className="text-white font-oswald text-3xl mt-1">$15,000</h3>
                  <p className="text-white/70 mt-2">Ideal for growing companies seeking increased visibility.</p>
                </div>
                
                <div className="space-y-3 my-6 flex-grow">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-blue shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">All Bronze benefits included</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-blue shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Medium logo on team apparel</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-blue shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">LED advertising during matches</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-blue shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">5 VIP match tickets per season</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-team-blue shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Meet & greet with 2 players</span>
                  </div>
                </div>
                
                <Link to="/contact" className="bg-team-blue text-white font-medium py-3 px-6 rounded-sm inline-flex w-full items-center justify-center space-x-2 hover:bg-team-blue/90 transition-colors">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              {/* Gold Package */}
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm flex flex-col h-full hover:border-yellow-500/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-white/60 uppercase text-sm tracking-wider">Gold Sponsor</span>
                  <h3 className="text-white font-oswald text-3xl mt-1">$30,000</h3>
                  <p className="text-white/70 mt-2">Premier package for maximum brand exposure and engagement.</p>
                </div>
                
                <div className="space-y-3 my-6 flex-grow">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">All Silver benefits included</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Premium logo placement on jerseys</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Named sponsor for one home match</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">10 VIP match tickets per season</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Exclusive team dinner invitation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80">Custom content creation for your brand</span>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-secondary w-full mt-auto inline-flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fan Donations Section */}
      <section className="py-16 bg-team-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-red font-medium uppercase tracking-wider text-sm">Fan Support</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                Donate To The Team
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Every contribution helps us grow stronger. Support our youth programs, stadium improvements, and community initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-team-gray/50 to-team-black p-8 rounded-sm">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-team-red/20 p-3 inline-block rounded-full mb-4">
                      <Heart className="text-team-red" size={30} />
                    </div>
                    <h3 className="text-white font-oswald text-2xl">One-Time Donation</h3>
                    <p className="text-white/70 mt-2">
                      Make a one-time contribution to help us reach our goals. Every dollar makes a difference.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">$10</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">$25</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">$50</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">$100</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">$250</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-3 rounded-sm text-center cursor-pointer hover:bg-team-gray transition-all duration-300">
                      <span className="text-white font-oswald">Custom</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-auto">Make Donation</button>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-team-gray/50 to-team-black p-8 rounded-sm">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-team-blue/20 p-3 inline-block rounded-full mb-4">
                      <Users className="text-team-blue" size={30} />
                    </div>
                    <h3 className="text-white font-oswald text-2xl">Become A Member</h3>
                    <p className="text-white/70 mt-2">
                      Join our supporters club with a monthly commitment and receive exclusive benefits and recognition.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-team-gray/50 border border-white/10 p-4 rounded-sm flex justify-between items-center hover:bg-team-gray transition-all duration-300 cursor-pointer">
                      <div>
                        <h4 className="text-white font-oswald">Fan</h4>
                        <p className="text-white/60 text-sm">Basic digital benefits</p>
                      </div>
                      <span className="text-white font-oswald">$10/mo</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-4 rounded-sm flex justify-between items-center hover:bg-team-gray transition-all duration-300 cursor-pointer">
                      <div>
                        <h4 className="text-white font-oswald">Supporter</h4>
                        <p className="text-white/60 text-sm">Digital + Merchandise</p>
                      </div>
                      <span className="text-white font-oswald">$25/mo</span>
                    </div>
                    <div className="bg-team-gray/50 border border-white/10 p-4 rounded-sm flex justify-between items-center hover:bg-team-gray transition-all duration-300 cursor-pointer">
                      <div>
                        <h4 className="text-white font-oswald">Champion</h4>
                        <p className="text-white/60 text-sm">All benefits + Tickets</p>
                      </div>
                      <span className="text-white font-oswald">$50/mo</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-auto">Join Membership</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-team-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-team-blue font-medium uppercase tracking-wider text-sm">Why Support Us</span>
              <h2 className="text-white text-4xl font-oswald uppercase mt-2 mb-6">
                Your Impact
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                See how your contributions help develop our club and the wider community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-team-red/20 p-3 inline-block rounded-full mb-4">
                  <Users className="text-team-red" size={30} />
                </div>
                <h3 className="text-white font-oswald text-xl mb-2">Youth Development</h3>
                <p className="text-white/70">
                  Supporting training programs and scholarships for young talent.
                </p>
              </div>
              
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-team-red/20 p-3 inline-block rounded-full mb-4">
                  <Globe className="text-team-red" size={30} />
                </div>
                <h3 className="text-white font-oswald text-xl mb-2">Community Outreach</h3>
                <p className="text-white/70">
                  Building football fields and sports facilities in underserved areas.
                </p>
              </div>
              
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-team-red/20 p-3 inline-block rounded-full mb-4">
                  <TrendingUp className="text-team-red" size={30} />
                </div>
                <h3 className="text-white font-oswald text-xl mb-2">Club Growth</h3>
                <p className="text-white/70">
                  Investing in world-class training facilities and stadium improvements.
                </p>
              </div>
              
              <div className="bg-team-gray/50 border border-white/10 p-6 rounded-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-team-red/20 p-3 inline-block rounded-full mb-4">
                  <Award className="text-team-red" size={30} />
                </div>
                <h3 className="text-white font-oswald text-xl mb-2">Competitive Edge</h3>
                <p className="text-white/70">
                  Providing resources to attract and retain top football talent.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="btn-secondary inline-flex items-center space-x-2">
                <span>Contact for More Information</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Sponsorship;
