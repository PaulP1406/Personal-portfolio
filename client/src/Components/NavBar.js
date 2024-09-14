import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <a href="#">Logo</a>
                </div>
                <div className="space-x-4">
                    <a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200">Home</a>
                    <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200">About</a>
                    <a href="#project" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200">Projects</a>
                    <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200">Contact</a>
                    <a href="#leave-a-quote" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
                            Leave a Quote
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;