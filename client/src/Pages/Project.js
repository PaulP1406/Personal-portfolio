import React from 'react';
import ProjectCard from '../Components/ProjectCard'; 
import profpic from '../Logos/profpic.png';

const Projects = () => {
    // Local project data
    const projectData = [
        {
            title: "Usable Query",
            description: "Simplifies the use of React Query by offering a streamlined and centralized approach to managing queries and mutations.",
            imageUrl: {profpic}, // Make sure to place your images in the 'public' folder
            techStack: ["Javascript", "Typescript", "Vite"],
            projectLink: "https://github.com/your-github/usable-query"
        },
       
    ];

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    techStack={project.techStack}
                    projectLink={project.projectLink}
                />
            ))}
            <p> I'm in here</p>
        </div>
    );
};

export default Projects;
