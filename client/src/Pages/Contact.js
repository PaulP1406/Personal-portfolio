import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-8 gap-12">
                {/* Left Section: Contact Form */}
                <div className="w-full text-gray-900 dark:text-white col-start-2 col-span-3">
                    <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100 text-center lg:text-left">
                        Just say
                        <span className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            &nbsp;Hello!
                        </span>
                    </h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-300">Let's connect! Coffee's on me (and 🥐 too!)</p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400 w-full h-32"
                        ></textarea>
                        <div className="text-center lg:text-left">
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-indigo-700 dark:hover:bg-pink-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Contact Information */}
                <div className="w-full text-gray-900 dark:text-white col-start-6 col-span-3">
                    <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100 text-center mb-8 lg:text-left">
                        Contact <br /> Information                        
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        <strong>Email:</strong> ducduy0308@gmail.com
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300"><strong>Mobile:</strong> (+1) 778-710-6344</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300"><strong>Location:</strong> Vancouver, BC, Canada</p>

                    <h3 className="mt-12 text-3xl font-bold text-gray-700 dark:text-gray-100 text-center lg:text-left mt-8">
                        Follow Me
                        
                    </h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/ddpham/" className="transition hover:text-indigo-400 dark:hover:text-pink-300">LinkedIn</a>
                        <a href="https://github.com/PaulP1406" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Github</a>
                        <a href="#" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Discord</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;