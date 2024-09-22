import React , { useEffect, useState, useContext} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import whiteLogo from '../Logos/whiteLogo.png';
import blackLogo from '../Logos/blackLogo.png';

const Footer = () => { 
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400">
      {/* Top Line */}
      <div className="container mx-auto px-6 w-90">
        <hr className="mb-8 border-gray-300 dark:border-gray-700 mx-auto pb-6 w-5/12 dark:w-11/12" />
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column: Logo */}
        <div className="flex justify-center lg:justify-start lg:pl-20">
          <img src={blackLogo} alt="Logo" className="h-28 block dark:hidden" />
          <img src={whiteLogo} alt="Logo" className="h-28 hidden dark:block" />
        </div>

        {/* Right Column: Useful Links and Social Icons */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Useful Links */}
          <div className="text-center lg:text-left lg:col-start-4">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Useful</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="transition hover:text-gray-600 dark:hover:text-gray-200">Contact</a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-gray-600 dark:hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="/privacy-policy" className="transition hover:text-gray-600 dark:hover:text-gray-200">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center lg:text-left lg:col-start-6">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://github.com/PaulP1406" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-600 dark:hover:text-gray-200">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ddpham/" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-600 dark:hover:text-gray-200">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="container mx-auto px-6 flex justify-center lg:justify-between items-center mt-8 lg:pl-28">
        <p className="text-gray-800 dark:text-gray-400">&copy; {new Date().getFullYear()} Paul Pham. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;