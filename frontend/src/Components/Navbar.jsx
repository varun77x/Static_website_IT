import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 px-6 text-white absolute top-0 z-20">
      {/* Hamburger Icon for mobile */}
      <div className="md:hidden flex items-center justify-between">
        <button onClick={toggleMenu} className="text-3xl space-y-2">
          <span className={`block w-8 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu Links for Desktop */}
      <ul className="hidden md:flex justify-end font-semibold text-base md:text-2xl lg:text-3xl space-x-4 md:space-x-6 pr-4 md:pr-20">
        <li><a href="#about">About</a></li>
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 bg-black text-white p-6 rounded-md shadow-lg w-1/2">
          <ul className="flex flex-col items-start space-y-6 font-semibold text-xl">
            <li><a href="#about" onClick={closeMenu} className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#offerings" onClick={closeMenu} className="hover:text-blue-400 transition">Offerings</a></li>
            <li><a href="#partners" onClick={closeMenu} className="hover:text-blue-400 transition">Partners</a></li>
            <li><a href="#careers" onClick={closeMenu} className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
