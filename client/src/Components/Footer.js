import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            {/* Top Line */}
            <div className="container mx-auto px-6">
                <hr className="border-gray-700 mb-8" />
            </div>
            
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Left Column: Logo */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4 lg:pl-20">PPham</h2>
                </div>

                {/* Right Column: Useful Links and Social Icons */}
                <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-8 gap-8">
                    {/* Useful Links */}
                    <div className="text-center lg:text-left lg:col-start-4">
                        <h3 className="text-white font-semibold mb-4">Useful</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/contact" className="hover:text-gray-200 transition">Contact</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-gray-200 transition">About</a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-gray-200 transition">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="text-center lg:text-left lg:col-start-6">
                        <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                                <FaYoutube className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Copyright */}
            <div className="container mx-auto px-6 flex justify-center lg:justify-between items-center mt-8 pl-20">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Paul Pham. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;