/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, useMemo } from 'react';

export default function Profile({ language }) {
  const [isHighResImageLoaded, setIsHighResImageLoaded] = useState(false);
  const highResImageRef = useRef();

  const content = useMemo(() => ({
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
  }), []);

  const handleHighResImageLoad = () => {
    setIsHighResImageLoaded(true);
  };

  useEffect(() => {
    if (highResImageRef.current && highResImageRef.current.complete) {
      setIsHighResImageLoaded(true);
    }
  }, []);

  const ContactLink = ({ href, imgSrc, altText, label }) => (
    <div className="text-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} className="w-12 h-12 object-cover mx-auto" />
      </a>
      <p className="mt-2 text-sm text-[#878787]">{label}</p>
    </div>
  );

  return (
    <div>
      <div className="relative m-12 w-64 h-64 mx-auto rounded-full overflow-hidden">
        <img
          src="/portrait-low.jpg"
          alt="Portrait Low Resolution"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHighResImageLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          ref={highResImageRef}
          src="/portrait.JPG"
          alt="Portrait High Resolution"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHighResImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleHighResImageLoad}
        />
      </div>
      <p className="text-lg">
        {content[language].description}
      </p>
      <h2 className="text-2xl font-semibold mt-10">{content[language].contact}</h2>
      <div className="p-2">
        <p>Email: <a href="mailto:toddmctsai@gmail.com" className="text-blue-500 dark:text-blue-300">toddmctsai@gmail.com</a></p>
      </div>
      <div className="flex justify-between items-center mt-8 px-10 sm:px-8 md:px-20">
        <ContactLink 
          href="https://www.linkedin.com/in/ming-cheng-tsai-4821862b4"
          imgSrc="/icons8-linkedin-500.png"
          altText="LinkedIn"
          label="LinkedIn"
        />
        <ContactLink 
          href="https://github.com/catstring"
          imgSrc="/icons8-github-96.png"
          altText="GitHub"
          label="GitHub"
        />
        <ContactLink 
          href="https://leetcode.com/u/totallytoddy/"
          imgSrc="/icons8-leetcode-96.png"
          altText="LeetCode"
          label="LeetCode"
        />
      </div>
    </div>
  );
}
