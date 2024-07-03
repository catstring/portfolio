/* eslint-disable react/prop-types */
// import React from 'react';

export default function Project({ language }) {
  const content = {
    en: {
      title: 'Projects',
      projects: [
        { name: 'Project 1', image: 'url_to_project1_image.jpg' },
        { name: 'Project 2', image: 'url_to_project2_image.jpg' },
      ],
    },
    zh: {
      title: '專案',
      projects: [
        { name: '專案 1', image: 'url_to_project1_image.jpg' },
        { name: '專案 2', image: 'url_to_project2_image.jpg' },
      ],
    },
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6">{content[language].title}</h1>
      <div className="grid grid-cols-1 gap-4">
        {content[language].projects.map((project, index) => (
          <div
            key={index}
            className="relative pb-1/1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md"
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center p-5 bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-xl font-semibold text-center">{project.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
