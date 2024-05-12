import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { useState } from 'react';

export default function Header({ isDarkTheme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`bg-${isDarkTheme ? 'black' : 'purple-100'} text-purple-700 p-4`}>
      <div className="flex justify-end items-center">
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={handleMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
        
        {/* Desktop Menu Buttons */}
        <div className="hidden lg:flex gap-4">
          <button>
            <span className="text-white bg-purple-700 lg:text-base sm:text-sm text-sm font-semibold px-4 py-1">About</span>
          </button>
          <button>
            <span className="hover:text-white hover:bg-purple-700 lg:text-base sm:text-sm text-sm font-semibold px-4 py-1">Projects</span>
          </button>
          <button>
            <span className="hover:text-white hover:bg-purple-700 lg:text-base sm:text-sm text-sm font-semibold px-4 py-1">Contact</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <button className="block w-full text-left font-semibold text-sm text-black py-1 px-2 hover:text-purple-700">
              About
            </button>
            <button className="block w-full text-left font-semibold text-sm text-black py-1 px-2 hover:text-purple-700">
              Projects
            </button>
            <button className="block w-full text-left font-semibold text-sm text-black py-1 px-2 hover:text-purple-700">
              Contact
            </button>
          </div>
        )}

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-2 rounded-full">
          {isDarkTheme ? <RiSunFill size={22} color="white" /> : <RiMoonFill size={22} color="black" />}
        </button>
      </div>
    </header>
  );
}
