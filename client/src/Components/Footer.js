import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import ThemeContext  from '../ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
      {/* Top Line */}
      <div className="container mx-auto px-6 w-90">
        <hr className={`mb-8 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`} />
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column: Logo */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 text-center lg:text-left lg:pl-20 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>PPham</h2>
        </div>

        {/* Right Column: Useful Links and Social Icons */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Useful Links */}
          <div className="text-center lg:text-left lg:col-start-4">
            <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Useful</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>Contact</a>
              </li>
              <li>
                <a href="/about" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>About</a>
              </li>
              <li>
                <a href="/privacy-policy" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center lg:text-left lg:col-start-6">
            <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Follow Me</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-gray-600'}`}>
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="container mx-auto px-6 flex justify-center lg:justify-between items-center mt-8 lg:pl-20">
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>&copy; {new Date().getFullYear()} Paul Pham. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;