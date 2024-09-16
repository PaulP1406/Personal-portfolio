import React from 'react';
import profpic2 from '../Logos/profpic2.png';

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 pt-48">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">

        {/* Left Section: Image */}
        <div className="lg:w-5/12 mb-8 lg:mb-0">
          <img 
            src= {profpic2} 
            alt="Your Name" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

         {/* Right Section: Introduction */}
         <div className="lg:w-1/2 space-y-6">
          <h2 className="text-rose-400 font-semibold text-lg uppercase">About Me</h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Hi There! I'm 
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              &nbsp;Paul Pham
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I'm a passionate developer with a focus on creating digital experiences that drive results. I specialize in front-end development, UX/UI design, and enjoy tackling challenging problems. I’m constantly learning and staying up-to-date with the latest industry trends.
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> paul_pham@sfu.ca</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> Burnaby, British Colombia, Canada</p>
          </div>
        </div>
      </div>

         {/* Tech Stack Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-12">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">React</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Node.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Next.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Express.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">HTML5</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">CSS3</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">JavaScript</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C++</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C#</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Python</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Git</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">GitHub</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">MongoDB</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" alt="Mongoose" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Mongoose</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Java</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Figma</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
