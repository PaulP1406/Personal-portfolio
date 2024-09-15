import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} Paul Pham. All rights reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;