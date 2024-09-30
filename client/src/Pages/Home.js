import React from 'react';
import {ReactTyped} from 'react-typed';
import profPic from '../Logos/profpic.png';

const Home = () => {
  return (
    <>      
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between mt-48 mb-48">
          
          {/* Left Section: Text and Buttons */}
          <div className="lg:w-1/2 space-y-6 text-center mb-24 lg:text-left lg:ml-20">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-rose-400">Hi, I'm</h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">Paul Pham</h1>
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              <ReactTyped
                strings={[
                  'Full Stack Software Engineer',
                  'Full Stack Web Developer',
                  'Tech Enthusiast',
                  'Computer Science Student at Simon Fraser University'
                ]}
                typeSpeed={45}
                backSpeed={35}
                loop
              />
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I am a passionate software engineer with experience in building different applications using modern technologies. I love solving complex problems and creating efficient solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center lg:justify-start pt-2">
              <a 
                href="https://drive.google.com/file/d/1EpXHTSY39yhyJQvGkQfDEwYBbNO9Nau4/view?usp=sharing"
                target='_blank'
                rel='noopener noreferrer' 
                className="whitespace-nowrap bg-gradient-to-r from-rose-500 to-amber-600 dark:from-rose-500 dark:to-amber-600 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-pink-600 dark:hover:bg-gradient-to-r dark:hover:from-fuchsia-600 dark:hover:to-pink-600 transition-transform duration-300 hover:scale-105">
                View Resume
              </a>
              <a 
                href="/quotes" 
                className="whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r transition-transform duration-300 hover:scale-105 transform dark:hover:bg-gradient-to-r"
                style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right center'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left center'}>
                Leave a Quote
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 mx-auto lg:ml-48 pb-8">
            <img src={profPic} alt="Paul Pham" className="w-3/5 lg:w-full h-auto rounded-lg border-0 mx-auto" />
          </div>
        </div>
      </section>      
    </>
  );
};

export default Home;
