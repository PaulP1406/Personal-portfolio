import React, { useState, useEffect } from 'react';

const LeaveAQuote = () => {
    const [formData, setFormData] = useState({ name: '', quote: '' });
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Fetch all quotes from backend
    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/quotes');
            const data = await response.json();
            setQuotes(data);
        } catch (err) {
            console.error('Failed to fetch quotes:', err);
        }
    };

    // Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('http://localhost:5000/api/quotes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newQuote = await response.json();
                setQuotes([...quotes, newQuote]); // Add new quote to the list
                setFormData({ name: '', quote: '' }); // Reset the form
                setSuccess(true);
            } else {
                setError('Failed to submit the quote. Please try again.');
            }
        } catch (err) {
            setError('Failed to submit the quote. Please try again later.');
        }
    };

    return (
        <div className="pt-36 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
            <h1 className="text-xl font-bold mb-4 text-center dark:text-gray-300">
                Feeling positive? <br />
                <span className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    &nbsp; Leave a Quote! <br />
                </span>
                
            </h1>
            
            <div className="grid grid-col-6 mt-8">
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-6 w-full md:w-3/4 mx-auto">
                    <div className="flex flex-col md:flex-row md:space-x-4 w-full items-center lg:pl-64 mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            maxLength={25}
                            onChange={handleChange}
                            className="w-3/4 lg:w-3/12 p-2 border bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white h-12 shadow-lg"
                            required
                        />
                        <input
                            name="quote"
                            placeholder="The wonderful quote"
                            maxLength={120}
                            value={formData.quote}
                            onChange={handleChange}
                            className="w-3/4 lg:w-5/12 p-2 bg-gray-100 border rounded-lg dark:bg-gray-800 dark:text-white h-12 shadow-lg"
                            required
                        ></input>
                    </div>
                    <button type="submit" className="font-bold lg:w-2/12 h:auto px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-indigo-700 dark:hover:bg-pink-500 ">
                        Leave quote 🥨
                    </button>
                </form>
            </div>

            {error && <p className="text-red-500 mb-4 dark:text-red-400">{error}</p>}
            <div className="container mx-auto px-6 w-90">
                <hr className="my-20 border-gray-300 dark:border-gray-700 mx-auto pb-6 w-5/12" />
            </div>

            {/* Display Quotes */}
            <div className='mb-20'>
                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white mb-12">
                    <span className="text-5xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold to-pink-500 bg-clip-text text-transparent">
                        Quotes
                    </span>
                    &nbsp; left by visitors 🤌
                </h2>
                <ul className=" mt-12 grid grid-cols-1 w-3/4 md:w-auto md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto lg:mx-36">
                    {quotes.map((quote, index) => (
                        <li key={index} className="p-1 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-pink-500 dark:from-amber-600 dark:to-pink-600 transform transition-transform duration-300 hover:scale-105">
                            <div className="bg-white p-4 rounded-full border border-gray-200 dark:bg-gray-800 dark:border-gray-600 h-44 overflow-hidden flex flex-col justify-center">
                                <p className="text-gray-800 font-semibold dark:text-gray-200 text-center px-4 text-center">"{quote.quote}"</p>
                                <p className="text-gray-600 text-sm dark:text-gray-400 text-center">- {quote.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pb-16 text-center lg:text-right lg:mr-40'>
                <a href="/contact" className="text-lg font-bold text-gray-600 dark:text-gray-400 group">
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Connect with me
                        </span>
                        <span className="inline-block ml-2 transition-transform duration-300 transform group-hover:translate-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            →
                        </span>
                </a>
            </div>
            
            
        </div>
        
    );
};

export default LeaveAQuote;
