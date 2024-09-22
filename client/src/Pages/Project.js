import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { FaReact, FaNodeJs, FaServer } from 'react-icons/fa'; 
import personalProf from '../Logos/PersonalProf.png';

const techIconMap = {
    react: <FaReact />,
    node: <FaNodeJs />,
    express: <FaServer />,
};

const Projects = () => {
    return (
        <div className="pt-28 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
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
                        description="This full-stack portfolio showcases my projects using React, Tailwind CSS, Node.js, Express, and MongoDB, building client, server and database sides. It features a responsive design, dynamic project management, and smooth user interactions, highlighting my skills in modern web development."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/your-repo/web-application"
                        liveDemoLink="https://youtube.com"
                    />
                </div>
                <div className="lg:col-start-4 col-span-2">
                    <ProjectCard
                        title="Android & IOS Apps"
                        description="Development of 3 cross-platform mobile apps made with Apache Cordova."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/your-repo/web-application"
                    />
                </div>
                <div className="lg:col-start-2 col-span-2">
                    <ProjectCard
                        title="Android & IOS Apps"
                        description="Development of 3 cross-platform mobile apps made with Apache Cordova."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/your-repo/web-application"
                    />
                </div>
                <div className="lg:col-start-4 col-span-2">
                    <ProjectCard
                        title="Android & IOS Apps"
                        description="Development of 3 cross-platform mobile apps made with Apache Cordova."
                        imageUrl={personalProf}
                        techStack={["react", "node", "express"]}
                        techIconMap={techIconMap}
                        githubLink="https://github.com/your-repo/web-application"
                    />
                </div>
                <div className="text-center mt-12 col-start-5">
                    <a href="/contact" className="text-lg font-bold text-gray-600 dark:text-gray-400 group">
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Connect with me
                        </span>
                        <span className="text-xl inline-block ml-2 transition-transform duration-300 transform group-hover:translate-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            →
                        </span>
                    </a>
                </div>
            </div>
           
        </div>
    );
};

export default Projects;