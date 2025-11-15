import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // Voting starts: 21 November 2025, 6:00 AM CAT
  const votingStartTime = new Date('2025-11-21T06:00:00+02:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = votingStartTime - Date.now();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [votingStartTime]);

  const isVotingOpen = Date.now() >= votingStartTime;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#003087] via-[#004099] to-[#0050b3] overflow-hidden">
      {/* Fixed: Properly encoded SVG data URI – the < characters are now %3C */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            CUNIMA
            <span className="block text-yellow-400 text-4xl md:text-6xl lg:text-7xl mt-2">
              Student Union Elections 2025
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-blue-100 font-medium">
            Friday, <span className="text-yellow-300 font-bold">21 November 2025</span>
          </p>

          {/* Countdown (only before voting starts) */}
          {!isVotingOpen && (
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
                <p className="text-white text-lg md:text-xl uppercase tracking-wider mb-6 opacity-90">
                  Voting begins in
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-5xl md:text-7xl font-bold text-yellow-400 tabular-nums">
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="text-sm md:text-lg uppercase tracking-widest text-blue-200 mt-3">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-blue-200 text-sm md:text-base">
                  Polls open at <strong>6:00 AM</strong> on 21 November 2025
                </p>
              </div>
            </div>
          )}

          {/* Vote Button – disabled until voting opens */}
          <div className="mt-16">
            <a
              href={isVotingOpen ? 'https://campusvote-mpy1.onrender.com' : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl transform hover:scale-105 ${
                isVotingOpen
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-70'
              }`}
              {...(!isVotingOpen ? { onClick: (e) => e.preventDefault() } : {})}
            >
              {isVotingOpen ? 'Start Voting Now' : 'Voting Starts Soon'}
            </a>
          </div>

          <p className="mt-10 max-w-2xl mx-auto text-blue-100 text-lg md:text-xl font-light leading-relaxed">
            {isVotingOpen
              ? 'The polls are open! Cast your vote for the future of CUNIMA.'
              : 'Get ready – voting begins in just a few days. Every vote counts!'}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/10 text-9xl font-bold select-none pointer-events-none">
        CUNIMA
      </div>
    </section>
  );
};

export default Hero;