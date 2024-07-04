/* eslint-disable react/prop-types */

export default function Hobby({ language }) {
  const commonHobbies = [
    {
      name: 'Hobby 1',
      video: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/b6HJl9_Yy4M?autoplay=1&mute=1&loop=1&playlist=b6HJl9_Yy4M&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
      name: 'Hobby 2',
      video: '',
    },
    { name: 'Hobby 3' },
    { name: 'Hobby 4' },
    { name: 'Hobby 5' },
    { name: 'Hobby 6' },
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
      <div className="relative overflow-hidden h-64">
        <div className="flex absolute top-0 left-0 animate-marquee whitespace-nowrap">
          {[...content[language].hobbies, ...content[language].hobbies].map((hobby, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-32 sm:w-64 h-32 sm:h-64 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 m-2 overflow-hidden"
            >
              <div className="absolute inset-0" style={{ padding: 0 }}>
                {hobby.video ? (
                  <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: hobby.video }} />
                ) : hobby.image ? (
                  <img src={hobby.image} alt={hobby.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <h2 className="text-xl font-semibold text-center">{hobby.name}</h2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
