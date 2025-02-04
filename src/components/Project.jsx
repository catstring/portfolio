/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Project({ language }) {
    const [expandedProject, setExpandedProject] = useState(null);

    const commonProjects = [
        {
            name: {
                en: "Todd's blog - Personal Blogging Site",
                zh: "Todd's blog - 個人部落格",
            },
            tech: {
                en: [
                    "Django",
                    "Typescript",
                    "MongoDB",
                    "GitHub Actions",
                    "AWS",
                ],
                zh: [
                    "Django",
                    "Typescript",
                    "MongoDB",
                    "GitHub Actions",
                    "AWS",
                ],
            },
            description: {
                en: `
          <p>I built this Markdown blogging site to easily share code. Rather than making just another portfolio website, I wanted to create something that is actively used, improved, and maintained over time. As I deepen my understanding of Python through solving LeetCode problems, I also wanted to put it to practical use by experimenting with Django in a real project. </p>
          <br />
          <p>Beyond coding, I’m also using this project as a way to practice silly thumbnail design, since grabbing people's attention is a valuable skill nowadays. Every post is a chance to improve both my technical and creative abilities.</p>
          <br />
          <p>Of course, It’s also a good place for me to practice putting thoughts into words and scripting, refining how I communicate ideas effectively.</p>
          <br />
          <p>This is a live, evolving website where I actively learn, apply new skills, and keep things running smoothly.</p>
        `,
                zh: `
          <p>這是一個方便分享程式碼的 Markdown 部落格網站。我想寫一個真正被使用、修改並持續維護的網站。隨著我透過 LeetCode 漸漸熟悉 Python，也想實際運用它，嘗試 Django，將它轉化為實戰經驗。</p>
          <br />
          <p>除了寫程式，我也把這個網站當作練習 惡搞縮圖設計 的機會，畢竟現在 吸引目光 是一項重要的技能。每篇文章都是提升我 技術 和 創意能力 的機會。當然，這裡也是一個讓我 練習將想法轉換成文字，提升腳本寫作能力的好地方，幫助我更有效地表達自己的想法。</p>
          <br />
          <p>這是一個 持續運作與進化的網站，在這裡，我慢慢學習、新增功能、解決問題，讓它變得更好。</p>
          `,
            },
            images: [
                "/projects/blog/1.png",
                "/projects/blog/2.png",
                "/projects/blog/3.png",
                "/projects/blog/4.png",
                "/projects/blog/5.png",
            ],
            link: "https://blog.toddmctsai.me/",
        },
        {
            name: {
                en: "This Personal Portfolio Website",
                zh: "本個人網站",
            },
            tech: {
                en: ["Typescript", "GitHub Actions", "AWS"],
                zh: ["Typescript", "GitHub Actions", "AWS"],
            },
            description: {
                en: `
          <p>This project is my test water for transitioning from JavaScript to TypeScript, built with a focus on structure, scalability, and maintainability. The project includes a language switch (English/Mandarin) and a dark/light mode toggle, enhancing accessibility and user experience.</p>
        `,
                zh: `
          <p>本專案是我嘗試從 JavaScript 轉換到 TypeScript 的作品，注重結構、可擴展性和可維護性。專案包含語言切換（英文/中文）和白天/夜晚模式，提升使用者無障礙體驗。</p>
          `,
            },
            images: [
                "/projects/portfolio/1.png",
                "/projects/portfolio/2.png",
                "/projects/portfolio/3.png",
                "/projects/portfolio/4.png",
            ],
            link: "https://toddmctsai.me/",
        },
        {
            name: {
                en: "Echo - Social Media App",
                zh: "Echo - 社群網站 APP",
            },
            tech: {
                en: ["Laravel", "MySQL", "Bootstrap", "GitHub Actions", "AWS"],
                zh: ["Laravel", "MySQL", "Bootstrap", "GitHub Actions", "AWS"],
            },
            description: {
                en: `
          <p>This is a Twitter-like website using PHP, Laravel, and the Blade engine. The project includes a login system where users can register as new users, with built-in password hashing to ensure security. Upon successful registration, a welcome email is sent using Laravel queues and Mail Trap.</p>
          <br />
          <p>Users can share, edit, and delete their own posts called "echos," and follow other users to see their echos in the feed page. They can also like and comment on echos from other users and search for echos using the search box. User profiles can be personalized with uploaded profile pictures, or generated using the Avataaars.io API. The feed page displays echos from followed users, and a top users section highlights users with the most echos, utilizing caching to avoid repeated data pulls.</p>
          <br />
          <p>An admin dashboard allows administrators to view and manipulate data for all users, echos, and comments. MySQL is used to manage data relationships. The responsive design is achieved using Bootstrap.</p>
        `,
                zh: `
          <p>這是一個使用 PHP、Laravel 和 Blade 引擎開發的仿 Twitter 網站。這個專案有會員登入系統，使用者可以註冊為新用戶，使用內建密碼 Hash 功能以確保安全。在成功註冊後，會使用 Laravel Queues 和 Mail Trap 發送歡迎郵件。</p>
          <br />
          <p>使用者可以分享、編輯和刪除他們自己的發文，稱為 "echos"，也可以追蹤其他使用者以在動態頁面上查看他們的 echos。還可以對其他使用者的 echos 進行點讚和評論，並使用搜尋框搜尋 echos。使用者可以上傳個人照片，或使用 Avataaars.io API 自動生成個人照片。Feed 頁面可以看到追蹤用戶的 echos，Top users 區顯示發表最多 echos 的用戶，並利用 cache 避免重複提取資料。</p>
          <br />
          <p>管理面板允許管理員查看和操作所有用戶、echos 和評論的資料。使用 MySQL 來管理資料庫關係。網站的響應設計是使用 Bootstrap 實現。</p>
          `,
            },
            images: [
                "/projects/echo/1.png",
                "/projects/echo/2.png",
                "/projects/echo/8.png",
                "/projects/echo/4.png",
                "/projects/echo/5.png",
                "/projects/echo/6.png",
            ],
            link: "https://echo.toddmctsai.me/",
        },
        {
            name: {
                en: "ToddoList - Productive app",
                zh: "ToddoList - 生產力 APP",
            },
            tech: {
                en: [
                    "Laravel",
                    "MySQL",
                    "Vue.js",
                    "Bootstrap",
                    "GitHub Actions",
                    "AWS",
                ],
                zh: [
                    "Laravel",
                    "MySQL",
                    "Vue.js",
                    "Bootstrap",
                    "GitHub Actions",
                    "AWS",
                ],
            },
            description: {
                en: `<p>In this project, I developed a simple task management application with a Laravel backend Restful API and a Vite-powered Vue.js frontend. The application allows users to perform basic CRUD actions such as registering, logging in, creating tasks, editing tasks, marking them as complete, and deleting tasks. Users can also toggle the visibility of completed tasks.</p>
        <br />
        <p>The application is hosted on an AWS VM with Nginx and secured with an HTTPS SSL certificate generated using Certbot. CI/CD is managed with GitHub Actions.</p>`,
                zh: `<p>這是一個簡單的代辦事項管理應用程式，採用前後端分離技術，後端 Restful API 使用 Laravel，前端則使用 Vite 和 Vue.js。此應用程式允許使用者執行基本的 CRUD 操作，例如註冊、登入、創建任務、編輯任務、標記任務為完成，以及刪除任務。使用者還可以選擇顯示或隱藏已完成的任務。<p>
        <br />
        <p>應用程式架設在 AWS VM 上，使用 Nginx，並通過 Certbot 生成的 HTTPS SSL 認證進行加密。CI/CD 由 GitHub Actions 管理。</p>`,
            },
            images: [
                "/projects/toddoList/1.png",
                "/projects/toddoList/2.png",
                "/projects/toddoList/3.png",
                "/projects/toddoList/4.png",
                "/projects/toddoList/5.png",
                "/projects/toddoList/6.png",
            ],
            link: "https://toddolist.toddmctsai.me/",
        },
    ];

    const content = {
        en: {
            title: "Web Dev Portfolio",
            projects: commonProjects.map((project) => ({
                ...project,
                name: project.name.en,
                tech: project.tech.en,
                description: project.description.en,
            })),
        },
        zh: {
            title: "專案作品集",
            projects: commonProjects.map((project) => ({
                ...project,
                name: project.name.zh,
                tech: project.tech.zh,
                description: project.description.zh,
            })),
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const projects = document.querySelectorAll(".project-images");
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
        <div
            className={`mt-20 p-5 ${
                expandedProject !== null ? "overflow-hidden" : ""
            }`}
        >
            <h1 className="text-3xl font-bold mb-6">
                {content[language].title}
            </h1>
            <div className="grid grid-cols-1 gap-4">
                {content[language].projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative ${
                            expandedProject === index ? "z-50" : ""
                        }`}
                    >
                        <span className="ml-3 md:ml-8 text-xl">
                            • {project.name}
                        </span>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                e.preventDefault();
                                handleExpand(index);
                            }}
                            className="mb-10 relative pb-[56.25%] text-black dark:text-white block group transform transition-transform duration-300 hover:scale-105"
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
                        </a>
                        {expandedProject === index && (
                            <>
                                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                                <div className="fixed inset-0 flex items-center justify-center z-50 ">
                                    <div className="relative max-w-3xl w-full bg-white dark:bg-gray-700 p-5 rounded-lg shadow-lg overflow-y-auto">
                                        <button
                                            onClick={() =>
                                                setExpandedProject(null)
                                            }
                                            className="absolute top-2 right-2 text-white flex"
                                        >
                                            <i className="fa-solid fa-circle-xmark text-2xl text-red-400"></i>
                                        </button>
                                        <h2 className="text-xl font-bold mt-4 mb-6">
                                            {project.name}
                                        </h2>
                                        <span>
                                            {language === "en"
                                                ? "Tech Stack:"
                                                : "使用技術:"}
                                        </span>
                                        <p className="mb-4">
                                            {project.tech.join(", ")}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 dark:text-blue-300 block"
                                        >
                                            {language === "en"
                                                ? "View Project"
                                                : "查看專案"}
                                        </a>
                                        <br />
                                        <div
                                            className="mb-4"
                                            dangerouslySetInnerHTML={{
                                                __html: project.description,
                                            }}
                                        />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {project.images.map(
                                                (image, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        // src={image}
                                                        alt=""
                                                        className="w-full h-auto rounded-lg"
                                                    />
                                                )
                                            )}
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
