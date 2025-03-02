
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-oswald font-bold">
                <span className="text-team-red">ARENA</span>
                <span className="text-team-blue">FC</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm">
              More than a team. We're a movement, a philosophy, and a community united by our passion for the beautiful game.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-white/70 hover:text-team-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-team-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-team-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-team-red transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-oswald uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/players" className="text-white/70 hover:text-white transition-colors">Players</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-white/70 hover:text-white transition-colors">Match Schedule</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-oswald uppercase mb-4">Latest Matches</h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-team-red font-medium">Arena FC vs. Rival United</span>
                <span className="text-white/70 text-sm">3-1 | May 15, 2023</span>
              </div>
              <div className="flex flex-col">
                <span className="text-team-red font-medium">Metro Tigers vs. Arena FC</span>
                <span className="text-white/70 text-sm">0-2 | May 8, 2023</span>
              </div>
              <div className="flex flex-col">
                <span className="text-team-red font-medium">Arena FC vs. City Warriors</span>
                <span className="text-white/70 text-sm">4-0 | May 1, 2023</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-oswald uppercase mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-team-red shrink-0 mt-0.5" size={18} />
                <span className="text-white/70">123 Stadium Road, Sportsville, SP 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-team-red shrink-0" size={18} />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-team-red shrink-0" size={18} />
                <span className="text-white/70">info@arenafc.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Arena Football Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
