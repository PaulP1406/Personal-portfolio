import React from 'react';

const ProjectCard = ({ title, description, imageUrl, techStack, projectLink }) => {
    return (
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 text-sm mb-4">{description}</p>
                <div className="flex space-x-2">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-lg font-bold">{title}</h3>
            </div>
        </a>
    );
};

export default ProjectCard;