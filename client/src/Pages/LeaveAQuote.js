import React, { useState } from 'react';

const LeaveAQuote = () => {
    const [formData, setFormData] = useState({ name: '', quote: '' });
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState('');

    // Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.quote) {
            setError('Both fields are required');
            return;
        }
        setQuotes([...quotes, formData]);  // Add new quote to the list
        setFormData({ name: '', quote: '' });  // Reset the form
        setError('');
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Leave a Quote</h1>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quote</label>
                    <textarea
                        name="quote"
                        value={formData.quote}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
                    Submit Quote
                </button>
            </form>

            {/* Display Quotes */}
            <h2 className="text-2xl font-bold mb-4 text-center">Quotes:</h2>
            <ul className="space-y-4">
                {quotes.map((quote, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-800 font-semibold">"{quote.quote}"</p>
                        <p className="text-gray-600 text-sm">- {quote.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaveAQuote;
