/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Project({ language }) {
  const [expandedProject, setExpandedProject] = useState(null);

  const commonProjects = [
    {
      name: 'Project 1',
      tech: ['Laravel, MySQL, Bootstrap, GitHub Actions, AWS'],
      description: {
        en: 'Project 1 description',
        zh: '專案1簡介',
      },
      images: [
        '/projects/echo/1.png',
        '/projects/echo/2.png',
        '/projects/echo/8.png',
        '/projects/echo/4.png',
        '/projects/echo/5.png',
        '/projects/echo/6.png',
      ],
      link: 'https://echo.pfolio1.xyz/',
    },
    {
      name: 'Project 2',
      tech: ['Laravel, MySQL, Vue.js, Bootstrap, GitHub Actions, AWS'],
      description: {
        en: 'Project 2 description',
        zh: '專案2簡介',
      },
      images: [
        '/projects/toddoList/1.png',
        '/projects/toddoList/2.png',
        '/projects/toddoList/3.png',
        '/projects/toddoList/4.png',
        '/projects/toddoList/5.png',
        '/projects/toddoList/6.png'
      ],
      link: 'https://toddolist.pfolio1.xyz/',
    },
  ];

  const content = {
    en: {
      title: 'Web Dev Portfolio',
      projects: commonProjects.map(project => ({
        ...project,
        description: project.description.en
      })),
    },
    zh: {
      title: '專案作品集',
      projects: commonProjects.map(project => ({
        ...project,
        description: project.description.zh
      })),
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const projects = document.querySelectorAll('.project-images');
      projects.forEach((project) => {
        const images = project.children;
        if (images.length > 1) {
          project.appendChild(images[0]);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className={`mt-20 p-5 ${expandedProject !== null ? 'overflow-hidden' : ''} transition-all`}>
      <h1 className="text-3xl font-bold mb-6 transition-all">{content[language].title}</h1>
      <div className="grid grid-cols-1 gap-4 transition-all">
        {content[language].projects.map((project, index) => (
          <div key={index} className={`relative ${expandedProject === index ? 'z-50' : ''} transition-all`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleExpand(index);
              }}
              className="relative pb-[56.25%] text-black dark:text-white block group transform transition-transform duration-300 hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 project-images">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg fade-animation transition-all"
                  />
                ))}
              </div>
            </a>
            {expandedProject === index && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-all"></div>
                <div className="fixed inset-0 flex items-center justify-center z-50 transition-all">
                  <div className="relative w-4/5 h-4/5 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-lg overflow-y-auto transition-all duration-300 ease-in-out">
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded transition-all"
                    >
                      Close
                    </button>
                    <h2 className="text-2xl font-bold mb-4 transition-all">{project.name}</h2>
                    <p className="mb-4 transition-all">{project.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all">
                      {project.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          // src={image}
                          alt=""
                          className="w-full h-auto rounded-lg transition-all"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
