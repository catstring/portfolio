/* eslint-disable react/prop-types */

export default function Hobby({ language }) {
  const commonHobbies = [
    { name: 'Hobby 1', type: 'video', src: 'hobbies/filming_editing.mp4' },
    { name: 'Hobby 2', type: 'video', src: 'hobbies/snowboarding.mp4' },
    { name: 'Hobby 3', type: 'video', src: 'hobbies/solo_travel.mp4' },
    { name: 'Hobby 4', type: 'video', src: 'hobbies/rope_access.mp4' },
  ];

  const content = {
    en: {
      title: 'Hobbies',
      hobbies: commonHobbies,
    },
    zh: {
      title: '興趣',
      hobbies: commonHobbies,
    },
  };

  return (
    <div className="p-5">
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
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                >
                  <source src={hobby.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {hobby.type === 'photo' && (
                <img 
                  src={hobby.src} 
                  alt={hobby.name} 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              )}
              {hobby.type === 'text' && (
                <h2 className="text-xl font-semibold text-center">{hobby.name}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
