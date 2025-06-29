import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const Expressjs = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-yellow-100 via-yellow-50 to-white border-2 border-yellow-300 shadow-[0_4px_20px_rgba(253,224,71,0.3)] hover:shadow-[0_6px_30px_rgba(253,224,71,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center gap-4'>
                <FaNodeJs className='w-[100px] h-[50px] text-yellow-400' />
                <SiExpress className='w-[90px] h-[40px] text-yellow-400' />
            </div>
        </div>
    );
};

export default Expressjs;
