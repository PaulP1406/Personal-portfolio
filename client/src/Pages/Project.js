import React from 'react';
import ProjectCard from '../Components/ProjectCard';

import { FaReact, FaNodeJs, FaServer, FaJava, FaPython } from 'react-icons/fa'; 
import { DiGit, DiScrum, DiMongodb, DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJunit5 } from "react-icons/si";

import personalProf from '../Logos/PersonalProf.png';
import Dungeon from '../Logos/Dungeon.png';
import Routine from '../Logos/Routine.png';
import Carbon from '../Logos/Carbon.png';

const techIconMap = {
    react: <FaReact />,
    node: <FaNodeJs />,
    express: <FaServer />,
    java: <FaJava />,
    git: <DiGit />,
    scrum: <DiScrum />,
    mongoDB: <DiMongodb />,
    css: <DiCss3 />,
    tailwind: <RiTailwindCssFill />,
    junit: <SiJunit5 />,
    python: <FaPython />
};

const Projects = () => {
    return (
        <div className="pt-36 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
            <div className="text-center mb-12">
                <h2 className="text-lg font-bold text-gray-600 dark:text-gray-400">Check out my</h2>
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white text-center">
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        &nbsp;PROJECTS
                    </span>
                </h1>
                <p className="mb-8 text-gray-600 dark:text-gray-300 text-center lg:text-center pt-4">Check out Github / Live demo of the projects🔥! <br /> (try misclick to check out the shaky effect)</p>
            </div>
            <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="lg:col-start-2 col-span-2">
                    <ProjectCard
                        title="Personal portfolio 📃"
                        description="This Personal Portfolio is a full-stack application showcasing my skills and projects. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, it features a dynamic, responsive design and smooth user interactions. The app integrates a backend for project management and stores data efficiently with MongoDB. It's a comprehensive display of my expertise in both front-end and back-end development, combining performance, with my own modern design in UI/UX, and functionality."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express", "mongoDB", "tailwind", "git"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/PaulP1406/Personal-portfolio"
                        liveDemoLink="https://www.paul-pham.com/"
                    />
                </div>
                <div className="lg:col-start-4 col-span-2">
                    <ProjectCard
                        title="Personal portfolio 📃"
                        description="This Personal Portfolio is a full-stack application showcasing my skills and projects. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, it features a dynamic, responsive design and smooth user interactions. The app integrates a backend for project management and stores data efficiently with MongoDB. It's a comprehensive display of my expertise in both front-end and back-end development, combining performance, with my own modern design in UI/UX, and functionality."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express", "mongoDB", "tailwind", "git"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/PaulP1406/Personal-portfolio"
                        liveDemoLink="https://www.paul-pham.com/"
                    />
                </div>
                <div className="lg:col-start-2 col-span-2">
                    <ProjectCard
                        title="Dungeon Escape 8-bit  🎮"
                        description="Dungeon Escape is a Java-based game project developed using Java's Graphics libraries. As part of a 4-student team, demonstrated my full-stack app development skills, working on both the game’s development (design, graphics and algorithm implementation) and implementing automated tests with JUnit and Mockito. Followed agile methodologies along with version control, following the main principles of the software development life cycle (SDLC) to ensure smooth and efficient game execution."
                        imageUrl={Dungeon}
                        techStack={["java", "junit", "git", "scrum"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/PaulP1406/Dungeon-Escape-2D"
                        liveDemoLink="https://drive.google.com/file/d/1EfufzyUS2UszcwRoO-UMBws5xpqiL191/view?usp=sharing"
                    />
                </div>
                <div className="lg:col-start-4 col-span-2">
                    <ProjectCard
                        title="Routine Roulette 🎲"
                        description="Routine Roulette app is a dynamic scheduling tool developed as part of ChaosHack 2024. Built using React and various frameworks, it allows users to drag and drop tasks to organize their daily schedules. A standout feature is the chaos button, which permutates the user's set schedule, creating a randomized arrangement of tasks—hence the app's name. As the project lead, I worked with a team of 4 developers, designing the UI and completing the back-end development to ensure a seamless and engaging user experience."
                        imageUrl={Routine}
                        techStack={["react", "node", "css", "git"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/PaulP1406/Systemhacks-Routine-Roulette"
                    />
                </div>
                <div className="lg:col-start-2 col-span-2">
                    <ProjectCard
                        title="MyFootPrint 🌍"
                        description="MyFootPrint app, developed in collaboration with a team of 4 during Stormhacks 2023, helps users generate food recipes with the lowest carbon emissions. The front end was built using ReactJS, while the ChatGPT API was integrated to provide recipe suggestions. The back end was powered by Python, with BeautifulSoup used for data scraping. This project showcases a blend of web development and environmental awareness, aimed at promoting sustainable eating habits."
                        imageUrl={Carbon}
                        techStack={["react", "python", "git", ]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/isa-leroux448/myfoodprint"
                    />
                </div>
                <div className="text-center mt-12 lg:col-start-5">
                <a href="/contact" className="inline-flex text-lg font-bold text-gray-600 dark:text-gray-400 group whitespace-nowrap">
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Connect with me
                    </span>
                    <span className="inline-block ml-2 transition-transform duration-300 transform group-hover:translate-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        →
                    </span>
                </a>
            </div>
            </div>
            
        </div>
    );
};

export default Projects;