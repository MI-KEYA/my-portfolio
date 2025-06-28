import React from 'react';
import { SiTailwindcss } from 'react-icons/si';
const Tailwind = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-sky-300 via-sky-100 to-white border-2 border-sky-500  shadow-lg rounded-2xl'>
            <div className='flex items-center justify-center'>
                <SiTailwindcss className='w-[100px] h-[50px] text-sky-400' />
            </div>
            {/* <div className='text-center'>

                <p className='text-justify text-gray-700'>
                    Tailwind CSS is a utility-first CSS framework that lets you build custom user interfaces.
                </p>
            </div> */}
        </div>
    );
};

export default Tailwind;