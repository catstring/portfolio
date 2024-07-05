/* eslint-disable react/prop-types */
// import React from 'react';

export default function Profile({ language }) {
  const content = {
    en: {
      description: (
        <>
        Hi there! My name is 
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-bold text-6xl p-5 mb-5">
            Todd Tsai
        </span> 
        I'm a backend web developer based in Taiwan. My goal is to become a versatile and efficient software engineer, and provide valuable assistance in various areas of development. If you're looking to hire a 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold p-2">junior</span> 
        developer, please get in touch!
        </>
      ),
      contact: 'Contact',
    },
    zh: {
      description: (
        <>
            你好！我的名字是
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 font-bold text-6xl p-5 mb-5 tracking-widest">
                蔡明澄
            </span>
            我是來自新北市的後端網頁工程師。我的目標是成為一名靈活且高效的軟體工程師，能夠在各個領域提供幫助。如果你正在尋找 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold p-2">junior</span> 
            網頁工程師，請與我聯繫！
        </>
      ),
      contact: '聯絡方式',
    }
  };

  return (
    <div className="">
        <img src="/portrait.JPG" alt="Portrait" className="m-12 rounded-full w-64 h-64 object-cover mx-auto" />
        <p className="text-lg">
            {content[language].description}
        </p>
        <h2 className="text-2xl font-semibold mt-10">{content[language].contact}</h2>
        <div className="p-2">
            <p>Email: <a href="mailto:toddmctsai@gmail.com" className="text-blue-500 dark:text-blue-300">toddmctsai@gmail.com</a></p>
        </div>
        <div className="flex justify-between items-center mt-8 px-10 sm:px-8 md:px-20">
    <div className="text-center">
        <a href="https://www.linkedin.com/in/ming-cheng-tsai-4821862b4" target="_blank" rel="noopener noreferrer">
            <img src="/icons8-linkedin-500.png" alt="LinkedIn" className="w-12 h-12 object-cover mx-auto" />
        </a>
        <p className="mt-2 text-sm text-[#878787]">LinkedIn</p>
    </div>
    <div className="text-center">
        <a href="https://github.com/catstring" target="_blank" rel="noopener noreferrer">
            <img src="/icons8-github-96.png" alt="GitHub" className="w-12 h-12 object-cover mx-auto" />
        </a>
        <p className="mt-2 text-sm text-[#878787]">GitHub</p>
    </div>
    <div className="text-center">
        <a href="https://leetcode.com/u/totallytoddy/" target="_blank" rel="noopener noreferrer">
            <img src="/icons8-leetcode-96.png" alt="LeetCode" className="w-12 h-12 object-cover mx-auto" />
        </a>
        <p className="mt-2 text-sm text-[#878787]">LeetCode</p>
    </div>
</div>

    </div>
  );
}
