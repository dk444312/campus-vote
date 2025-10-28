
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-tight">
            Your Voice, Your Vote.
            <br />
            <span className="text-gray-600">Shape Your Campus Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            CampusVote is the easiest and most secure way to participate in student elections. Make your voice heard and help build a better campus community.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <a
              href="https://campusvote-mpy1.onrender.com"
              className="inline-block bg-black text-white font-semibold rounded-lg px-6 py-3 text-center text-lg hover:bg-gray-800 transition-transform transform hover:-translate-y-1 shadow-lg"
            >
              Vote Now
            </a>
            <a
              href="https://campus-vote-registration.onrender.com/#/register"
              className="inline-block bg-white text-black font-semibold rounded-lg px-6 py-3 text-center text-lg border border-gray-300 hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
