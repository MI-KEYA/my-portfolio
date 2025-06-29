import React from 'react';
import { SiDaisyui } from 'react-icons/si';

const Daisyui = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-yellow-200 via-yellow-50 to-white border-2 border-yellow-400 shadow-[0_4px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_6px_30px_rgba(250,204,21,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <SiDaisyui className='w-[100px] h-[50px] text-yellow-400' />
            </div>
        </div>
    );
};

export default Daisyui;
