import React from 'react';
import { FaUniversity, FaCalendarAlt, FaBook, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { GiLaurelsTrophy } from 'react-icons/gi';

const Education = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-10 mt-20 text-center'>Education</h1>
            <div className='p-8 md:p-10 border border-gray-300 shadow-md rounded-2xl bg-white'>

                <div className='space-y-4'>

                    {/* Duration */}
                    <div className='flex items-start gap-4'>
                        <FaCalendarAlt className='text-blue-500 text-lg mt-1' />
                        <p className='text-gray-700'>2022 - Present</p>
                    </div>

                    {/* University */}
                    <div className='flex items-start gap-4'>
                        <FaUniversity className='text-green-600 text-2xl mt-1' />
                        <h2 className='text-2xl font-semibold text-gray-800'>Daffodil International University</h2>
                    </div>

                    {/* Degree */}
                    <div className='flex items-start gap-4'>
                        <MdSchool className='text-purple-500 text-xl mt-1' />
                        <p className='text-gray-700'>Bachelor of Science in Software Engineering</p>
                    </div>

                    {/* Major */}
                    <div className='flex items-start gap-4'>
                        <FaBook className='text-yellow-600 text-xl mt-1' />
                        <p className='text-gray-700'>Major in Data Science</p>
                    </div>

                    {/* CGPA */}
                    <div className='flex items-start gap-4'>
                        <GiLaurelsTrophy className='text-orange-500 text-xl mt-1' />
                        <p className='text-gray-700'>CGPA: <span className='font-medium'>3.82 / 4.00</span> (Current)</p>
                    </div>

                    {/* Graduation Date */}
                    <div className='flex items-start gap-4'>
                        <FaGraduationCap className='text-red-500 text-xl mt-1' />
                        <p className='text-gray-700'>Expected Graduation: <span className='font-medium'>April 2026</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;
