import React from 'react';
import { FaCss3Alt } from 'react-icons/fa';

const Css = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-blue-300 via-blue-100 to-white border-2 border-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaCss3Alt className='w-[100px] h-[50px] text-blue-700' />
            </div>
        </div>
    );
};

export default Css;
