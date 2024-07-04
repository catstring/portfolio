/* eslint-disable react/prop-types */

export default function Hobby({ language }) {
  const commonHobbies = [
    'Hobby 1',
    'Hobby 2',
    'Hobby 3',
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
            className="relative pb-1/1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 flex items-center justify-center p-5">
              <h2 className="text-xl font-semibold text-center">{hobby}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
