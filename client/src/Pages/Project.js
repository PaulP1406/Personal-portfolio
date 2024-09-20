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
        <div className="container pt-20 mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                title="Android & IOS Apps"
                description="Development of 3 cross-platform mobile apps made with Apache Cordova."
                imageUrl= {personalProf}
                techStack={["react", "node", "express"]}
                techIconMap={techIconMap}
                githubLink="https://github.com/your-repo/web-application"
            />
            <ProjectCard
                title="Web Application"
                description="A full-stack web application built with React, Node.js, and Express."
                imageUrl="/images/web-app.png"
                techStack={["react", "node", "express"]}
                techIconMap={techIconMap}
                githubLink="https://github.com/your-repo/web-application"
            />
            {/* Add more ProjectCard components as needed */}
        </div>
    );
};

export default Projects;