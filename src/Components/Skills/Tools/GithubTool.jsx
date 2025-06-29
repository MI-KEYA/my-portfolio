import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubTool = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-gray-500 via-gray-100 to-white border-2 border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaGithub className='w-[100px] h-[50px] text-black' />
            </div>
        </div>
    );
};

export default GithubTool;
