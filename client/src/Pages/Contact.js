import React, {useState, useEffect} from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';

const Contact = () => {
    const { width, height } = useWindowSize();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [error, setError] = useState("");
    const [success, setSucess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSucess("");
        try {
            const response = await fetch ("http://localhost:5000/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSucess(true);
                console.log("Message sent successfully!");
                setFormData({"firstName": "", "lastName": "", "email": "", "phone": "", "message": ""});
            } else {
                setError("Failed to send message. Please try again later.");
            }
        }
        catch (err) {
            setError("Failed to send message. Please try again later.");
        }
    }

    useEffect(() => {
        if (success) {
          const timer = setTimeout(() => {
            setSucess(false);
          }, 10000); // Confetti for 3 seconds
          return () => clearTimeout(timer);
        }
      }, [success]);

    return (
        <div className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 mb-8">
            {success  && (
                <Confetti
                 width={width}
                 height={height}
                 numberOfPieces={1000}       
                 gravity={0.05}   
                 recycle={false}
             />
            )}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-8 gap-12">
                {/* Left Section: Contact Form */}
                <div className="w-full text-gray-900 dark:text-white lg:col-start-2 lg:col-span-3">
                    <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100 text-center lg:text-left">
                        Just say
                        <span className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            &nbsp;Hello!
                        </span>
                    </h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-300 text-center lg:text-left">Let's connect! Coffee's on me (and 🥐 too!)</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400"
                                
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className="p-4 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:focus:ring-pink-400 w-full h-32"
                            required
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
                <div className="w-full text-gray-900 dark:text-white lg:col-start-6 lg:col-span-3 mt-20 lg:mt-2">
                    <h2 className="text-3xl lg:text-2xl font-bold text-gray-700 dark:text-gray-100 text-center mb-8 lg:text-left">
                        Contact <br /> Information                        
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center lg:text-left">
                        <strong>Email:</strong> ducduy0308@gmail.com
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-center lg:text-left"><strong>Mobile:</strong> (+1) 778-710-6344</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-center lg:text-left"><strong>Location:</strong> Vancouver, BC, Canada</p>

                    <h3 className="pt-16 lg:mt-12 text-3xl lg:text-2xl font-bold text-gray-700 dark:text-gray-100 text-center lg:text-left mt-8">
                        Follow Me
                        
                    </h3>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/ddpham/" className="transition hover:text-indigo-400 dark:hover:text-pink-300">LinkedIn</a>
                        <a href="https://github.com/PaulP1406" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Github</a>
                        <a href="https://github.com/PaulP1406" className="transition hover:text-indigo-400 dark:hover:text-pink-300">Discord</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;