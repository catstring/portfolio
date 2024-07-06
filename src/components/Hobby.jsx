/* eslint-disable react/prop-types */
import { useMemo } from 'react';

const HobbyCard = ({ hobby, language }) => (
  <div className="relative pb-1/1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {hobby.type === 'iframe' && (
        <div className="video-responsive">
          <iframe
            src={hobby.src}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover"
            title={hobby.name}
          ></iframe>
        </div>
      )}
    </div>
    <div className="absolute inset-0 flex items-center justify-center p-5 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">{hobby.description[language]}</p>
    </div>
  </div>
);

export default function Hobby({ language }) {
  const commonHobbies = useMemo(() => [
    {
      name: 'Filming and editing',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/DtBr72nY710?autoplay=1&loop=1&playlist=DtBr72nY710&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Filming and editing travel video allow memories to last longer.',
        zh: '拍攝和剪輯旅遊影片可以讓記憶更鮮明。',
      },
    },
    {
      name: 'Blender 3D modeling',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/beLQiCADOmA?autoplay=1&loop=1&playlist=beLQiCADOmA&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Exploring the creative process of 3D modeling with Blender.',
        zh: '使用Blender探索3D建模的創意過程。',
      },
    },
    {
      name: 'Having fun on rope',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/Rqyad_eLrQI?autoplay=1&loop=1&playlist=Rqyad_eLrQI&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Another day at the office as a rope access technician.',
        zh: '在繩索上工作的日常。',
      },
    },
    {
      name: 'Snowboarding on a powdery day',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/sEZEexyp0LE?autoplay=1&loop=1&playlist=sEZEexyp0LE&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Enjoy the thrill of snowboarding on a fresh powder day.',
        zh: '享受在粉雪天滑雪的飄逸。',
      },
    },
    {
      name: 'Solo traveling in Philippines',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/OFZaQ0owrWA?autoplay=1&loop=1&playlist=OFZaQ0owrWA&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Experience the beauty and culture of the Philippines.',
        zh: '通過獨自旅行體驗菲律賓的美麗和文化。',
      },
    },
    {
      name: '3D physics in Unity',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/eRFOnM11nt0?autoplay=1&loop=1&playlist=eRFOnM11nt0&mute=1&controls=0&showinfo=0&rel=0',
      description: {
        en: 'Dive into the world of 3D physics simulations using Unity.',
        zh: '使用Unity探索3D物理模擬的世界。',
      },
    },
  ], []);

  const content = useMemo(() => ({
    en: {
      title: 'Life in Motion',
      hobbies: commonHobbies,
    },
    zh: {
      title: '生活軌跡',
      hobbies: commonHobbies,
    },
  }), [commonHobbies]);

  return (
    <div className="p-5 mt-20">
      <h1 className="text-3xl font-bold mb-6">{content[language].title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {content[language].hobbies.map((hobby, index) => (
          <HobbyCard key={index} hobby={hobby} language={language} />
        ))}
      </div>
    </div>
  );
}
