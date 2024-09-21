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
            </div>
            <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
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
            </div>
        </div>
    );
};

export default Projects;