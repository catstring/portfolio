/* eslint-disable react/prop-types */
// import React from 'react';

export default function Skill({ language }) {
    const content = {
      en: {
        title: 'Tech Stack',
        categories: [
          {
            category: 'Language',
            items: ['JavaScript', 'PHP', 'Python'],
          },
          {
            category: 'Backend',
            items: ['Laravel', 'Django'],
          },
          {
            category: 'Frontend',
            items: ['React.js', 'Vue.js'],
          },
          {
            category: 'CSS',
            items: ['Tailwind', 'Bootstrap'],
          },
          {
            category: 'Database',
            items: ['MySQL/ MariaDB', 'MongoDB'],
          },
          {
            category: 'DevOps',
            items: ['GitHub', 'CI/CD', 'Docker', 'AWS/ GCP'],
          },
          {
            category: 'Test',
            items: ['Vitest', 'PHPUnit/ Pest', 'Django/ Pytest'],
          },
        ],
      },
      zh: {
        title: '核心技術',
        categories: [
          {
            category: '語言',
            items: ['JavaScript', 'PHP', 'Python'],
          },
          {
            category: '後端',
            items: ['Laravel', 'Django'],
          },
          {
            category: '前端',
            items: ['React.js', 'Vue.js'],
          },
          {
            category: 'CSS',
            items: ['Tailwind', 'Bootstrap'],
          },
          {
            category: '資料庫',
            items: ['MySQL/ MariaDB', 'MongoDB'],
          },
          {
            category: 'DevOps',
            items: ['GitHub', 'CI/CD', 'Docker', 'AWS/ GCP'],
          },
          {
            category: '測試',
            items: ['Vitest', 'PHPUnit/ Pest', 'Django/ Pytest'],
          },
        ],
      }
    };
  
    return (
      <div className="p-5 mt-20">
        <h1 className="text-3xl font-bold mb-6">{content[language].title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {content[language].categories.map((skill, index) => (
            <div
              key={index}
              className="p-5 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <h2 className="font-semibold mb-2">{skill.category}</h2>
              <ul className="text-sm list-disc pl-5 flex flex-wrap">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="mb-1 w-full">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
