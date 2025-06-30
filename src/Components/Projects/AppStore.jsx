import React from 'react';
import { FaRocket, FaLock, FaHeart, FaThList, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiFirebase } from 'react-icons/si';
import appstoreImg from '../../assets/appstore.png'; // Replace with your actual image path

const AppStore = () => {
    return (

        <div className="group flex flex-col items-center mt-10 md:flex-row border border-gray-300 rounded-2xl bg-white transition duration-300 hover:shadow-2xl hover:-translate-y-1">

            {/* Left Side */}
            <div className="w-full md:w-3/5 p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2">
                    <FaRocket className="text-indigo-500" />
                    Modern App Store Platform with Categorized Apps
                </h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://lavender-app-store-97e4e.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        🌐 Live Site <FaExternalLinkAlt className="text-sm" />
                    </a>

                    <a
                        href="https://github.com/programming-hero-web-course1/b11a9-react-authentication-MI-KEYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-800 font-medium hover:underline"
                    >
                        <FaGithub className="text-lg" />GitHub Repo
                    </a>
                </div>




                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                        <FaThList className="text-green-500 mt-1" />
                        App Categories:
                        <ul className="ml-6 list-disc space-y-1">
                            <li>Trending Apps</li>
                            <li>Productivity Apps</li>
                            <li>Gaming Apps</li>
                            <li>Educational Apps</li>
                        </ul>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRocket className="text-pink-500" />
                        Trending apps based on highest ratings.
                    </li>
                    <li className="flex items-center gap-2">
                        <SiTailwindcss className="text-cyan-500" />
                        Clean, responsive UI using Tailwind CSS.
                    </li>
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiReact className="text-blue-500" /> React
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiFirebase className="text-yellow-500" /> Firebase
                    </span>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-2/5 px-2">
                <img
                    src={appstoreImg}
                    alt="App Store Preview"
                    className="w-[700px] h-[280px] rounded-xl"
                />
            </div>
        </div>

    );
};

export default AppStore;
