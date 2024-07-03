/* eslint-disable react/prop-types */

export default function Hobby({ language }) {
  const content = {
    en: {
      title: 'Hobbies',
      hobbies: [
        'Hobby 1',
        'Hobby 2',
        'Hobby 3',
        'Hobby 4',
        'Hobby 5',
        'Hobby 6',
      ],
    },
    zh: {
      title: '興趣',
      hobbies: [
        '興趣 1',
        '興趣 2',
        '興趣 3',
        '興趣 4',
        '興趣 5',
        '興趣 6',
      ],
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
              className="relative flex-shrink-0 w-32 sm:w-64 h-32 sm:h-64 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 m-2"
            >
              <div className="absolute inset-0 flex items-center justify-center p-5">
                <h2 className="text-xl font-semibold text-center">{hobby}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
