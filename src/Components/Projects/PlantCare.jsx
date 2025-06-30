import React from 'react';
import plantcareImg from '../../assets/plantcare.png';
import { FaExternalLinkAlt, FaGithub, FaLeaf } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';

const PlantCare = () => {
    return (
        <div className='flex flex-col items-center md:flex-row border border-gray-300 rounded-2xl shadow-md bg-white transition duration-300 hover:shadow-2xl hover:-translate-y-1'>

            {/* Left Side: Details */}
            <div className='w-full md:w-3/5 p-6 space-y-4'>
                <h2 className='text-2xl font-semibold text-green-700 flex items-center gap-2'>
                    <FaLeaf className='text-green-500' />
                    PlantCare – Online Plant Care Guide & Shop
                </h2>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://plantcare-app-21094.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        🌐 Live Site <FaExternalLinkAlt className="text-sm" />
                    </a>

                    <a
                        href="https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-MI-KEYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-800 font-medium hover:underline"
                    >
                        <FaGithub className="text-lg" />GitHub Repo
                    </a>
                </div>

                <ul className='list-disc ml-5 list-inside space-y-2 text-gray-700'>
                    <li>Users can add new plants with details like name, category, watering frequency, and health status.</li>
                    <li>All plants are publicly viewable.</li>
                    <li>Registered users can manage their own plant collection.</li>
                    <li>Each user has a personalized dashboard.</li>
                </ul>

                <div className='flex flex-wrap items-center gap-4 pt-4'>
                    <span className='flex items-center gap-1 text-sm text-gray-600'>
                        <SiReact className='text-blue-500' /> React
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-600'>
                        <SiTailwindcss className='text-cyan-500' /> Tailwind CSS
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-600'>
                        <SiExpress className='text-gray-800' /> Express
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-600'>
                        <SiMongodb className='text-green-600' /> MongoDB
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-600'>
                        <SiFirebase className='text-yellow-500' /> Firebase
                    </span>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className='w-full md:w-2/5 px-2 '>
                <img
                    src={plantcareImg}
                    alt="PlantCare Preview"
                    className='w-[600px] h-[250px] rounded-xl'
                />
            </div>
        </div>
    );
};

export default PlantCare;
