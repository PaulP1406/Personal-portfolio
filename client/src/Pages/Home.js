import React from 'react';
import NavBar from '../Components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="bg-white dark:bg-gray-900 py-12 pt-16"> {/* Add pt-16 to account for the fixed nav bar */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
          
          {/* Left Section: Text and Buttons */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">Hi, I'm Paul Pham</h1>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">Full Stack Software Engineer</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I am a passionate software engineer with experience in building web applications using modern technologies. I love solving complex problems and creating efficient solutions.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a 
                href="https://drive.google.com/your-resume-link" 
                className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition">
                View Resume
              </a>
              <a 
                href="/quotes" 
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition">
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
    </>
  );
};

export default Home;
