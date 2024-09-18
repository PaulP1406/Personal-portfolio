import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-12 pt-48"> {/* Added mt-24 to push down the component */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side: Contact Me */}
                <div className="text-center lg:text-left">
                    <h1 className="font-semibold text-4xl text-gray-800">Contact Me</h1>
                    <p className="text-gray-600 mt-4">
                        Need to get in touch with me? Either fill out the form with your inquiry or
                        find the department email you'd like to contact below.
                    </p>
                </div>
                
                {/* Right Side: Form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-2xl p-8 shadow-lg rounded-lg border border-gray-200 bg-white">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <input
                                    type="text"
                                    placeholder="First name*"
                                    className="p-4 border border-gray-300 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name*"
                                    className="p-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="p-4 border border-gray-300 rounded-lg w-full"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    placeholder="Your message*"
                                    className="p-4 border border-gray-300 rounded-lg w-full h-32"
                                ></textarea>
                            </div>
                            <div className="text-center lg:text-right">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
