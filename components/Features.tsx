
import React from 'react';
import { SecureIcon, RegisterIcon, ResultsIcon } from './icons/FeatureIcons';

const features = [
  {
    icon: <SecureIcon />,
    title: 'Secure & Anonymous',
    description: 'Our platform ensures every vote is encrypted and kept completely anonymous. Vote with confidence and peace of mind.',
  },
  {
    icon: <RegisterIcon />,
    title: 'Effortless Registration',
    description: 'Get ready to vote in minutes. Our streamlined registration process is quick, simple, and designed for students.',
  },
  {
    icon: <ResultsIcon />,
    title: 'Transparent Results',
    description: 'Access real-time, verified election results as soon as they are available. Transparency is at the core of our system.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            A Better Voting Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We've built a platform that's fair, easy to use, and accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0 bg-black text-white rounded-full p-4 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
