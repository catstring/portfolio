/* eslint-disable react/prop-types */
import { useState } from 'react';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Project from './components/Project';
import Hobby from './components/Hobby';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const ToggleButton = ({ onClick, isActive, activeIcon, inactiveIcon, activeText, inactiveText }) => (
  <button
    onClick={onClick}
    className="w-24 p-2 text-gray-800 bg-gray-200 rounded dark:bg-gray-600 dark:text-gray-200 flex items-center justify-center"
  >
    <i className={`fa ${isActive ? activeIcon : inactiveIcon} mr-2`}></i>
    {isActive ? activeText : inactiveText}
  </button>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'zh' : 'en'));
  };



  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300`}>
        <div className="fixed-top flex space-x-2 p-2">
          <ToggleButton
            onClick={toggleLanguage}
            isActive={language === 'en'}
            activeIcon="fa-solid fa-language"
            inactiveIcon="fa-solid fa-language"
            activeText="中文"
            inactiveText="English"
          />
          <ToggleButton
            onClick={toggleDarkMode}
            isActive={darkMode}
            activeIcon="fa-solid fa-lightbulb"
            inactiveIcon="fa-regular fa-lightbulb"
            activeText="Light"
            inactiveText="Dark"
          />
        </div>
        <div className="p-5 max-w-2xl mx-auto pt-20">
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
