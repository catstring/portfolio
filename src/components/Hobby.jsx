/* eslint-disable react/prop-types */

export default function Hobby({ language }) {
  const commonHobbies = [
    {
      name: 'Hobby 3',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/ZJqhXL6-s-E?autoplay=1&loop=1&playlist=ZJqhXL6-s-E&mute=1&controls=0&showinfo=0&rel=0',
    },
    {
      name: 'Hobby 4',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/beLQiCADOmA?autoplay=1&loop=1&playlist=beLQiCADOmA&mute=1&controls=0&showinfo=0&rel=0',
    },
    {
      name: 'Hobby 1',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/Rqyad_eLrQI?autoplay=1&loop=1&playlist=Rqyad_eLrQI&mute=1&controls=0&showinfo=0&rel=0',
    },
    {
      name: 'Hobby 5',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/sEZEexyp0LE?autoplay=1&loop=1&playlist=sEZEexyp0LE&mute=1&controls=0&showinfo=0&rel=0',
    },
    {
      name: 'Hobby 2',
      type: 'iframe',
      src: 'https://www.youtube.com/embed/OFZaQ0owrWA?autoplay=1&loop=1&playlist=OFZaQ0owrWA&mute=1&controls=0&showinfo=0&rel=0',
    },
  ];

  const content = {
    en: {
      title: 'Life in Motion',
      hobbies: commonHobbies,
    },
    zh: {
      title: '生活剪影',
      hobbies: commonHobbies,
    },
  };

  return (
    <div className="p-5 mt-20">
      <h1 className="text-3xl font-bold mb-6">{content[language].title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {content[language].hobbies.map((hobby, index) => (
          <div
            key={index}
            className="relative pb-1/1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center p-5">
              {hobby.type === 'video' && (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={hobby.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {hobby.type === 'photo' && (
                <img
                  src={hobby.src}
                  alt={hobby.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {hobby.type === 'text' && (
                <h2 className="text-xl font-semibold text-center">{hobby.content}</h2>
              )}
              {hobby.type === 'iframe' && (
                <div className="video-responsive">
                  <iframe
                    src={hobby.src}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
