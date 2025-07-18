import React from 'react';
import { FaGitAlt } from 'react-icons/fa';

const GitTool = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-orange-200 via-orange-50 to-white border-2 border-orange-500 shadow-[0_4px_20px_rgba(251,146,60,0.3)] hover:shadow-[0_6px_30px_rgba(251,146,60,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaGitAlt className='w-[100px] h-[50px] text-orange-600' />
            </div>
        </div>
    );
};

export default GitTool;
