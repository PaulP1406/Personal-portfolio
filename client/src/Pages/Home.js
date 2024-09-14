import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Section: Text and Buttons */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-pink-500 font-semibold text-lg">UI/UX Designer</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">Hi! I Am [Your Name]</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a 
              href="https://drive.google.com/your-resume-link" 
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition">
              Resume
            </a>
            <a 
              href="/quotes" 
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition">
              Leave a Quote
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:text-blue-500" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:text-blue-500" />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:text-blue-500" />
            </a>
            <a href="https://dribbble.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaDribbble className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 relative">
          <img 
            src="your-photoshopped-image-url-here" 
            alt="[Your Name]" 
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
