import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // DEADLINE: TOMORROW @ 9:00 PM CAT (Malawi) → 2025-11-08 21:00:00
  const votingEndTime = new Date('2025-11-10T21:00:00').getTime();

  const [now, setNow] = useState(Date.now());
  const [countdown, setCountdown] = useState('');

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  // Recalculate countdown whenever `now` changes
  useEffect(() => {
    const diff = votingEndTime - now;

    if (diff <= 0) {
      setCountdown('0m');
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    setCountdown(hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`);
  }, [now, votingEndTime]);

  const isVotingOpen = now < votingEndTime;

  const buttonConfig = isVotingOpen
    ? {
        text: 'Start Voting',
        href: 'https://campus-vote-registration.onrender.com/#/register',
        bg: 'bg-black',
        hoverBg: 'hover:bg-gray-800',
        textColor: 'text-white',
      }
    : {
        text: 'View Results',
        href: 'https://voting-results.onrender.com/',
        bg: 'bg-blue-600',
        hoverBg: 'hover:bg-blue-700',
        textColor: 'text-white',
      };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-tight">
            2025 Finale Dinner Awards Voting Now Closed. Thank you for voting!
            <br />
            <span className="text-gray-600">Shape Your Campus Future.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            CampusVote is the easiest and most secure way to participate in student
            elections. Make your voice heard and help build a better campus
            community.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={buttonConfig.href}
              className={`inline-block ${buttonConfig.bg} ${buttonConfig.textColor} font-semibold rounded-lg px-8 py-4 text-center text-xl 
                         hover:${buttonConfig.hoverBg} transition-transform transform hover:-translate-y-1 shadow-xl`}
            >
              {buttonConfig.text}
            </a>
          </div>

          {/* LIVE COUNTDOWN */}
          {isVotingOpen && (
            <p className="mt-6 text-sm font-medium text-red-600 animate-pulse">
              Voting closes in <span className="font-bold">{countdown}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
