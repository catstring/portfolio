/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export default function Project({ language }) {
  const commonProjects = [
    { 
      name: 'Project 1', 
      tech: ['Laravel, MySQL, Bootstrap, AWS'], 
      images: [
        '/projects/echo/1.png', 
        '/projects/echo/2.png',
        '/projects/echo/8.png',
        '/projects/echo/4.png',
        '/projects/echo/5.png',
        '/projects/echo/6.png',
      ],
      link: 'https://echo.pfolio1.xyz/',
      description: {
        en: 'Project 1 description',
        zh: '專案1簡介',
      }
    },
    { 
      name: 'Project 2', 
      tech: ['Laravel, MySQL, Vue.js, Bootstrap, AWS'], 
      images: [
        '/projects/toddoList/1.png', 
        '/projects/toddoList/2.png',
        '/projects/toddoList/3.png',
        '/projects/toddoList/4.png',
        '/projects/toddoList/5.png',
        '/projects/toddoList/6.png'
      ],
      link: 'https://toddolist.pfolio1.xyz/',
      description: {
        en: 'Project 2 description',
        zh: '專案2簡介',
      }
    },
  ];

  const content = {
    en: {
      title: 'Projects',
      projects: commonProjects.map(project => ({
        ...project,
        description: project.description.en
      })),
    },
    zh: {
      title: '專案',
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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6">{content[language].title}</h1>
      <div className="grid grid-cols-1 gap-4">
        {content[language].projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative pb-[56.25%] text-black dark:text-white block group transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 project-images">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-lg fade-animation"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-5 rounded-lg bg-gray-800 hover:opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">{project.tech.join(', ')}</h2>
                <p className="text-white mt-2">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
