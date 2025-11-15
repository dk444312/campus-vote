import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import TurnoutChart from './components/TurnoutChart';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
      {/* Header - CUNIMA Blue */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with built-in countdown + disabled button until 21 Nov 2025, 6:00 AM */}
        <Hero />

        {/* Only show these sections after voting starts OR always show (your choice) */}
        {/* Currently showing always – looks professional even during countdown */}
        <Features />
        <TurnoutChart />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;