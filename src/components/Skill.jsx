/* eslint-disable react/prop-types */
// import React from 'react';

export default function Skill({ language }) {
    const content = {
      en: {
        title: 'Skills',
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
            items: ['Vue.js', 'React.js'],
          },
          {
            category: 'CSS',
            items: ['Bootstrap', 'Tailwind'],
          },
          {
            category: 'Database',
            items: ['SQL', 'MongoDB'],
          },
          {
            category: 'DevOps',
            items: ['GitHub', 'CI/CD', 'Docker', 'AWS/ GCP'],
          },
        ],
      },
      zh: {
        title: '技能',
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
            items: ['Vue.js', 'React.js'],
          },
          {
            category: 'CSS',
            items: ['Bootstrap', 'Tailwind'],
          },
          {
            category: '資料庫',
            items: ['SQL', 'MongoDB'],
          },
          {
            category: 'DevOps',
            items: ['GitHub', 'CI/CD', 'Docker', 'AWS/ GCP'],
          },
        ],
      }
    };
  
    return (
      <div className="p-5 mt-8">
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
