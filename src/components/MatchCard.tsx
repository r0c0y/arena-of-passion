
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface MatchCardProps {
  match: {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeScore?: number;
    awayScore?: number;
    date: Date;
    time: string;
    location: string;
    isUpcoming: boolean;
  };
  className?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, className }) => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const isArenaHome = match.homeTeam.includes('Arena');

  return (
    <div 
      className={cn(
        "bg-team-gray/50 hover:bg-team-gray border border-white/5 p-6 rounded-sm transition-all duration-300 group",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          {match.isUpcoming ? (
            <div className="inline-block bg-team-blue/20 text-team-blue px-3 py-1 text-xs uppercase font-medium rounded-sm mb-3">
              Upcoming Match
            </div>
          ) : (
            <div className="inline-block bg-team-red/20 text-team-red px-3 py-1 text-xs uppercase font-medium rounded-sm mb-3">
              Match Complete
            </div>
          )}
          
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="text-right md:text-center">
              <h3 className={cn("font-oswald text-2xl", isArenaHome ? "text-team-red" : "text-white")}>
                {match.homeTeam}
              </h3>
              {!match.isUpcoming && (
                <span className="text-4xl font-oswald">{match.homeScore}</span>
              )}
            </div>
            
            <div className="text-center text-white py-2 px-4">
              {match.isUpcoming ? (
                <span className="text-2xl">VS</span>
              ) : (
                <span className="text-lg">-</span>
              )}
            </div>
            
            <div className="text-left md:text-center">
              <h3 className={cn("font-oswald text-2xl", !isArenaHome ? "text-team-red" : "text-white")}>
                {match.awayTeam}
              </h3>
              {!match.isUpcoming && (
                <span className="text-4xl font-oswald">{match.awayScore}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-right space-y-2">
          <div className="flex items-center justify-center md:justify-end text-white/70 space-x-2">
            <Calendar size={16} />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center justify-center md:justify-end text-white/70 space-x-2">
            <Clock size={16} />
            <span>{match.time}</span>
          </div>
          <div className="flex items-center justify-center md:justify-end text-white/70 space-x-2">
            <MapPin size={16} />
            <span>{match.location}</span>
          </div>
          
          {match.isUpcoming && (
            <a 
              href="#" 
              className="inline-block btn-secondary mt-4 text-sm py-2 md:mt-4"
            >
              Get Tickets
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
