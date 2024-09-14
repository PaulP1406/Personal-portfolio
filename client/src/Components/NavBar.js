import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src="logo-url-here" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">TailGrids</span>
        </div>

        {/* Middle Section: Nav Links for Larger Screens */}
        <div className="hidden lg:flex lg:space-x-8 flex-grow justify-center">
          <a href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</a>
          <a href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</a>
          <a href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Projects</a>
          <a href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</a>
        </div>

        {/* Right Section: Button and Icons */}
        <div className="flex items-center space-x-4">
          <a href="/quotes" className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow hover:opacity-90 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300">
            Leave a Quote
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
            {isDarkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
        <a href="/" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</a>
        <a href="/about" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</a>
        <a href="/projects" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Projects</a>
        <a href="/contact" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</a>
        <a href="/quotes" className="block px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow hover:opacity-90 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300">
          Leave a Quote
        </a>
      </div>
    </nav>
  );
};

export default NavBar;