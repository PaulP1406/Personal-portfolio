import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon from react-icons

const ProjectCard = ({ title, description, imageUrl, techStack, techIconMap, githubLink }) => {
    const githubIconRef = useRef(null);

    const handleCardClick = (e) => {
        if (githubIconRef.current && !githubIconRef.current.contains(e.target)) {
            githubIconRef.current.classList.add('shake');
            setTimeout(() => {
                githubIconRef.current.classList.remove('shake');
            }, 500);
        }
    };

    return (
        <div onClick={handleCardClick} className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-4">
            {/* Line with GitHub Icon */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex-grow border-t border-gray-700"></div>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="ml-4 text-white text-2xl hover:text-gray-400 transition-colors duration-300" ref={githubIconRef}>
                    <FaGithub />
                </a>
            </div>
            
            {/* Image */}
            <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded-lg mb-4" />
            
            {/* Title */}
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-4">{description}</p>
            
            {/* Tech Stack Icons */}
            <div className="flex mt-4 space-x-4">
                {techStack.map((tech, index) => (
                    <span key={index} className="text-white text-2xl">
                        {techIconMap[tech]}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;