import React, { useState } from 'react';
import { MenuIcon, XIcon } from '../src/icons/NavIcons'; // adjust if icons are elsewhere
import cunimaLogo from '../Src/image.png';               // THIS IS THE CORRECT PATH

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Register', href: 'https://campus-vote-registration.onrender.com/#/register' },
    { name: 'Vote',     href: 'https://campusvote-mpy1.onrender.com' },
    { name: 'Results',  href: 'https://voting-results.onrender.com' },
  ];

  return (
    <header className="bg-[#003087] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Catholic University of Malawi Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={cunimaLogo}
                alt="Catholic University of Malawi"
                className="h-11 w-auto md:h-12 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:bg-white/20 px-4 py-2 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/20 rounded-md"
          >
            {isMenuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#002a6e]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-medium hover:bg-white/20 px-4 py-3 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
