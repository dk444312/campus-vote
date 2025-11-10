import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // Voting START: November 21, 2025 @ 9:00 AM CAT (UTC+2)
  const votingStartTime = new Date('2025-11-21T09:00:00+02:00').getTime();

  const [now, setNow] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate time left
  useEffect(() => {
    const diff = votingStartTime - now;

    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, [now, votingStartTime]);

  const isVotingStarted = now >= votingStartTime;
  const showCountdown = !isVotingStarted;

  return (
    <>
      {/* ====== COUNTDOWN SCREEN (Visible until Nov 21) ====== */}
      {showCountdown && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center space-y-8 p-8">
            <p className="text-white text-xl uppercase tracking-widest opacity-70">
              Voting starts in
            </p>

            <div className="flex gap-6 md:gap-10 justify-center flex-wrap">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-6xl md:text-8xl font-bold text-white tabular-nums">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-wider text-gray-400 mt-3">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====== FULL HERO PAGE (Hidden until voting starts) ====== */}
      <div className={showCountdown ? 'invisible opacity-0' : 'visible opacity-100 transition-opacity duration-1000'}>
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                2025 CUNIMA
                <span className="block text-yellow-400 mt-2">Student Union Elections</span>
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
                Your vote shapes tomorrow. Elect the leaders who will represent you.
              </p>

              <div className="mt-10">
                <a
                  href="https://campus-vote-registration.onrender.com/#/register"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition hover:-translate-y-1"
                >
                  Vote Now
                </a>
              </div>
            </div>
          </div>

          {/* Ballot Animation */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-48 pointer-events-none">
            <BallotAnimation />
          </div>
        </section>
      </div>
    </>
  );
};

// Reusable Ballot Animation
const BallotAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-700"></div>
        <div className="absolute inset-x-0 bottom-4 h-1 bg-gray-600 mx-2 rounded"></div>
      </div>

      <div className="absolute top-0 left-8 w-16 h-20 bg-white rounded-sm shadow-lg animate-ballot-fly">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-dashed border-gray-600 rounded"></div>
        </div>
        <div className="absolute top-1 left-1 right-1 h-px bg-gray-300"></div>
        <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-300"></div>
      </div>

      <style jsx>{`
        @keyframes ballot-fly {
          0% {
            transform: translateY(-180px) translateX(-80px) rotate(-45deg);
            opacity: 0;
          }
          50% { opacity: 1; }
          100% {
            transform: translateY(20px) translateX(20px) rotate(10deg);
            opacity: 0;
          }
        }
        .animate-ballot-fly {
          animation: ballot-fly 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Hero;