import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="App">    


      <Home />
      {/* <button
        onClick={toggleDarkMode}
        className="mt-4 p-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded"
      >
        Toggle Dark Mode
      </button> */}
      
    </div>
  );
}

export default App;
