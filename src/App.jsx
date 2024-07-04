import React, { useState } from 'react';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Project from './components/Project';
import Hobby from './components/Hobby';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; // Make sure to import your CSS file where the keyframes are defined

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showBounce, setShowBounce] = useState(true); // State to control bounce effect

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Remove bounce effect after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowBounce(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${showBounce ? 'bounce' : ''}`}>
        <div className="fixed-top">
          <button
            onClick={toggleLanguage}
            className="w-24 p-2 text-gray-800 bg-gray-200 rounded dark:bg-gray-600 dark:text-gray-200 flex items-center justify-center"
          >
            <i className="fa-solid fa-language mr-2"></i>
            {language === 'en' ? '中文' : 'English'}
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-24 p-2 text-gray-800 bg-gray-200 rounded dark:bg-gray-600 dark:text-gray-200 flex items-center justify-center"
          >
            {darkMode ? (
              <i className="fa-solid fa-lightbulb mr-2"></i>
            ) : (
              <i className="fa-regular fa-lightbulb mr-2"></i>
            )}
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
        <div className="p-5 max-w-2xl mx-auto pt-20"> {/* Add padding to top to prevent content overlap */}
          <div className="text-black dark:text-white">
            <Profile language={language} />
            <Skill language={language} />
            <Project language={language} />
            <Hobby language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
