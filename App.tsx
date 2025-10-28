
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import TurnoutChart from './components/TurnoutChart';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <TurnoutChart />
      </main>
      <Footer />
    </div>
  );
};

export default App;
