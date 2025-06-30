import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaRunning } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiReact, SiReactrouter } from 'react-icons/si';
import athletichubImg from '../../assets/athleticHub.png'; // 🔁 Replace with your actual path

const AthleticHub = () => {
    return (
        <div className="group flex flex-col items-center md:flex-row mt-10 border border-gray-300 rounded-2xl shadow-md bg-white transition duration-300 hover:shadow-2xl hover:-translate-y-1">

            {/* Left Content */}

            <div className="w-full md:w-2/5 px-2">
                <img
                    src={athletichubImg}
                    alt="AthleticHub Preview"
                    className="w-[600px] h-[250px] rounded-xl"
                />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-3/5 p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-900 flex items-center gap-2">
                    <FaRunning className="text-blue-900" />
                    AthleticHub – Athletic Event Booking Platform
                </h2>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://athletichub-dc2bd.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        🌐 Live Site <FaExternalLinkAlt className="text-sm" />
                    </a>

                    <a
                        href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-MI-KEYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-800 font-medium hover:underline"
                    >
                        <FaGithub className="text-lg" />GitHub Repo
                    </a>
                </div>

                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Full-stack app that allows users to book and create sports events.</li>
                    <li>Implemented user login and booking dashboard using Firebase Auth.</li>
                    <li>Built backend REST API using Express.js.</li>
                    <li>Stored and managed event data in MongoDB.</li>
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiReact className="text-blue-500" /> React
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiReactrouter className="text-pink-500" /> React Router
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiFirebase className="text-yellow-500" /> Firebase
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiExpress className="text-gray-800" /> Express
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                        <SiMongodb className="text-green-600" /> MongoDB
                    </span>
                </div>
            </div>



        </div>

    );
};

export default AthleticHub;
