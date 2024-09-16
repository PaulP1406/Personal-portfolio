import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="bg-white dark:bg-gray-900 py-12 pt-16 min-h-screen flex items-center"> {/* Add min-h-screen and flex classes */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between mt-48 mb-48">
          
          {/* Left Section: Text and Buttons */}
          <div className="lg:w-1/2 space-y-6">
            <div className="text-justify">
              <h1 className="text-xl lg:text-2xl font-bold text-rose-400">Hi, I'm</h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">Paul Pham</h1>
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 text-justify">
              <ReactTyped
                strings={[
                  'Full Stack Software Engineer',
                  'Full Stack Web Developer',
                  'Tech Enthusiast',
                  'Computer Science Student at SFU'
                ]}
                typeSpeed={45}
                backSpeed={35}
                loop
              />
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg text-justify">
              I am a passionate software engineer with experience in building web applications using modern technologies. I love solving complex problems and creating efficient solutions.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 sm:justify-center lg:justify-start pt-2">
              <a 
                href="https://drive.google.com/your-resume-link" 
                className="bg-gradient-to-r from-rose-500 to-amber-600 dark:from-rose-500 dark:to-amber-600 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-pink-600 dark:hover:bg-gradient-to-r dark:hover:from-fuchsia-600 dark:hover:to-pink-600">
                View Resume
              </a>
              <a 
                href="/quotes" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 dark:hover:bg-gradient-to-r dark:hover:from-emrald-400 dark:hover:to-cyan-400"
                style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right center'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left center'}>
                Leave a Quote
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="your-image-link.jpg" alt="Paul Pham" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
