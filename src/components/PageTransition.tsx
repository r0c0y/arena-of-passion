
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export type TransitionEffect = 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'glitch';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  effect?: TransitionEffect;
  duration?: number; // in milliseconds
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children,
  className,
  effect = 'fade',
  duration = 500
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  // Dynamically set the transition classes based on effect prop
  const getTransitionClasses = () => {
    const baseClasses = `transition-all duration-${duration}`;
    
    switch (effect) {
      case 'fade':
        return {
          out: `${baseClasses} opacity-0 transform translate-y-4`,
          in: `${baseClasses} opacity-100 transform translate-y-0`,
        };
      case 'slide-left':
        return {
          out: `${baseClasses} opacity-0 transform translate-x-20`,
          in: `${baseClasses} opacity-100 transform translate-x-0`,
        };
      case 'slide-right':
        return {
          out: `${baseClasses} opacity-0 transform -translate-x-20`,
          in: `${baseClasses} opacity-100 transform translate-x-0`,
        };
      case 'scale':
        return {
          out: `${baseClasses} opacity-0 transform scale-95`,
          in: `${baseClasses} opacity-100 transform scale-100`,
        };
      case 'glitch':
        return {
          out: `${baseClasses} opacity-0 animate-glitch`,
          in: `${baseClasses} opacity-100`,
        };
      default:
        return {
          out: `${baseClasses} opacity-0`,
          in: `${baseClasses} opacity-100`,
        };
    }
  };

  const transitionClasses = getTransitionClasses();

  return (
    <div
      className={cn(
        {
          [transitionClasses.out]: transitionStage === "fadeOut",
          [transitionClasses.in]: transitionStage === "fadeIn",
        },
        className
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default PageTransition;
