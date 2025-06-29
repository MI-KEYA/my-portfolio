import React from 'react';
import { SiTailwindcss } from 'react-icons/si';

const Tailwind = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-sky-300 via-sky-100 to-white border-2 border-sky-500 shadow-[0_4px_20px_rgba(56,189,248,0.3)] hover:shadow-[0_6px_30px_rgba(56,189,248,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <SiTailwindcss className='w-[100px] h-[50px] text-sky-400' />
            </div>
        </div>
    );
};

export default Tailwind;
