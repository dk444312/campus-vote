import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import TurnoutChart from './components/TurnoutChart';

const App: React.FC = () => {
  const [isCountdownActive, setIsCountdownActive] = useState(true);

  // Voting START: November 21, 2025 @ 9:00 AM CAT (UTC+2)
  const votingStartTime = new Date('2025-11-21T06:00:00+02:00').getTime();

  useEffect(() => {
    const checkTime = () => {
      const now = Date.now();
      if (now >= votingStartTime) {
        setIsCountdownActive(false);
      }
    };

    // Check immediately
    checkTime();

    // Then check every second
    const interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, [votingStartTime]);

  return (
    <>
      {/* ====== FULL-SCREEN COUNTDOWN (from Hero) ====== */}
      {isCountdownActive && <Hero />}

      {/* ====== MAIN APP (hidden until countdown ends) ====== */}
      <div
        className={`transition-opacity duration-1000 ${
          isCountdownActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="bg-white text-black min-h-screen flex flex-col antialiased">
          <Header />
          <main className="flex-grow">
            {/* Hero is still rendered but now shows full content */}
            <Hero />
            <Features />
            <TurnoutChart />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;