import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12 lg:flex lg:space-x-12">
                {/* Left Section: Contact Form */}
                <div className="p-8 shadow-lg rounded-lg w-full lg:w-2/3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-600 dark:text-pink-400">Just say Hello!</h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-300">Let us know more about you!</p>

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
                        <div className="text-center lg:text-right">
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg shadow-md transition bg-indigo-600 dark:bg-pink-400 text-white hover:bg-indigo-700 dark:hover:bg-pink-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Contact Information */}
                <div className="mt-8 lg:mt-0 lg:w-1/3 p-8 rounded-lg shadow-lg bg-white dark:bg-blue-900 text-gray-900 dark:text-white">
                    <h2 className="font-semibold text-xl mb-4 text-indigo-600 dark:text-pink-400">Contact Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        77 Baker Street<br />Bondowoso, 87655, Indonesia
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Call us: +62 81 334 61 00</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">We are open from Monday - Friday<br />08:00 am - 05:00 pm</p>

                    <h3 className="font-semibold text-xl mt-8 text-indigo-600 dark:text-pink-400">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Facebook</a>
                        <a href="#" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Instagram</a>
                        <a href="#" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Vimeo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;