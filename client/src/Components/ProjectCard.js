import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing GitHub and external link icons from react-icons

const ProjectCard = ({ title, description, imageUrl, techStack, techIconMap, githubLink, liveDemoLink }) => {
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
        <div className="relative p-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg transition-transform duration-300 hover:scale-105">
            <div
                onClick={handleCardClick}
                className="relative group rounded-lg overflow-hidden cursor-pointer p-4 bg-white text-gray-900 shadow-lg dark:bg-gray-900 dark:text-white"
            >
                {/* Line with GitHub Icon */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-2xl hover:text-gray-400 transition-colors duration-300"
                        ref={githubIconRef}
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Image */}
                <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded-lg mb-4" />

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{title}</h3>

                {/* Description */}
                <p className="mb-6 dark:font-light text-justified">{description}</p>

                {/* Tech Stack Icons */}
                <div className="flex mt-4 space-x-4">
                    {techStack.map((tech, index) => (
                        <span key={index} className="text-2xl">
                            {techIconMap[tech]}
                        </span>
                    ))}
                </div>

                {/* Live Demo Link */}
                {liveDemoLink && (
                    <div className="absolute bottom-4 right-4">
                        <a
                            href={liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-gray-400 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;