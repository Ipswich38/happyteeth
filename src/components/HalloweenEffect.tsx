'use client';

import { useState, useEffect } from 'react';

export function HalloweenEffect() {
  const [isHalloweenTime, setIsHalloweenTime] = useState(false);

  useEffect(() => {
    const checkHalloweenTime = () => {
      const now = new Date();
      const startDate = new Date('2024-10-24');
      const endDate = new Date('2025-11-01');

      setIsHalloweenTime(now >= startDate && now <= endDate);
    };

    checkHalloweenTime();
    const interval = setInterval(checkHalloweenTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isHalloweenTime) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Pumpkins */}
      <div className="absolute top-10 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <div className="text-4xl">🎃</div>
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <div className="text-3xl">🎃</div>
      </div>
      <div className="absolute top-32 left-1/3 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
        <div className="text-2xl">🎃</div>
      </div>

      {/* Flying Bats */}
      <div className="absolute top-16 left-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <div className="text-2xl animate-ping">🦇</div>
      </div>
      <div className="absolute top-24 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <div className="text-xl animate-ping">🦇</div>
      </div>
      <div className="absolute top-8 right-1/4 animate-pulse" style={{ animationDelay: '2.5s' }}>
        <div className="text-lg animate-ping">🦇</div>
      </div>

      {/* Falling Autumn Leaves */}
      <div className="falling-leaves">
        <div className="leaf leaf-1">🍂</div>
        <div className="leaf leaf-2">🍁</div>
        <div className="leaf leaf-3">🍂</div>
        <div className="leaf leaf-4">🍁</div>
        <div className="leaf leaf-5">🍂</div>
        <div className="leaf leaf-6">🍁</div>
      </div>

      {/* Ghosts */}
      <div className="absolute top-14 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="text-2xl opacity-80">👻</div>
      </div>
      <div className="absolute top-28 left-2/3 animate-pulse" style={{ animationDelay: '3s' }}>
        <div className="text-xl opacity-70">👻</div>
      </div>

      {/* Spiders */}
      <div className="absolute top-6 right-10 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2s' }}>
        <div className="text-lg">🕷️</div>
      </div>
      <div className="absolute top-36 left-20 animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '2.5s' }}>
        <div className="text-lg">🕸️</div>
      </div>

      <style jsx>{`
        .falling-leaves {
          position: absolute;
          top: -50px;
          left: 0;
          width: 100%;
          height: 100vh;
        }

        .leaf {
          position: absolute;
          font-size: 1.5rem;
          animation: fall linear infinite;
        }

        .leaf-1 {
          left: 10%;
          animation-duration: 8s;
          animation-delay: 0s;
        }

        .leaf-2 {
          left: 25%;
          animation-duration: 10s;
          animation-delay: 2s;
        }

        .leaf-3 {
          left: 40%;
          animation-duration: 12s;
          animation-delay: 4s;
        }

        .leaf-4 {
          left: 60%;
          animation-duration: 9s;
          animation-delay: 1s;
        }

        .leaf-5 {
          left: 75%;
          animation-duration: 11s;
          animation-delay: 3s;
        }

        .leaf-6 {
          left: 90%;
          animation-duration: 7s;
          animation-delay: 5s;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Make elements more subtle and cute */
        .leaf, .text-4xl, .text-3xl, .text-2xl, .text-xl, .text-lg {
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }
      `}</style>
    </div>
  );
}