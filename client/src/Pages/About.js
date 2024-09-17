import React from 'react';
import profpic2 from '../Logos/profpic2.png';

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 pt-48">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">

        {/* Left Section: Image */}
        <div className="w-6/12 lg:w-4/12 mb-8 lg:mb-0">
          <img 
            src={profpic2} 
            alt="Your Name" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Introduction */}
        <div className="lg:w-7/12 space-y-6 lg:ml-8">
          <h2 className="text-rose-500 font-semibold dark:text-rose-400 text-xl uppercase text-center lg:text-left">About Me</h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center lg:text-left">
            Hi There! I'm 
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              &nbsp;Paul Pham
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg text-justify lg:text-justify">
            I'm a full-stack developer with a passion for creating dynamic and efficient web and mobile applications. I specialize in leveraging modern technologies like React, Node.js, and MongoDB to build scalable and user-friendly solutions. With a strong foundation in both front-end and back-end development, I enjoy solving complex technical challenges and continuously refining my skills to stay at the forefront of the tech industry. My approach to development emphasizes clean code, intuitive design, and seamless integration across platforms. Apart from that, I enjoy gym, F1 and sometimes reading tech documentation while on walks! Feel free to explore my portfolio to see what I’ve been working on!
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> ducduy0308@gmail.com</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> Vancouver, BC, Canada</p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            <a 
                href="https://drive.google.com/your-resume-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-rose-500 to-amber-600 dark:from-rose-500 dark:to-amber-600 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-pink-600 dark:hover:bg-gradient-to-r dark:hover:from-fuchsia-600 dark:hover:to-pink-600"
            >
                View Resume
            </a>
            <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 text-white px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 dark:hover:bg-gradient-to-r dark:hover:from-emerald-400 dark:hover:to-cyan-400"
            >
                Contact Me
            </a>
            </div>          
        </div>      
      </div>

               {/* Tech Stack Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-32">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">React</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Node.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Next.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Express.js</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">HTML5</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">CSS3</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">JavaScript</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C++</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">C#</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Python</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Java</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">MongoDB</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" alt="Mongoose" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Mongoose</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">SQL</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Git</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">GitHub</p>
          </div>                  
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Figma</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
