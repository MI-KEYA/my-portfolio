import React from 'react';
import { GrReactjs } from 'react-icons/gr';

const Reactjs = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-sky-200 via-sky-50 to-white border-2 border-sky-300 shadow-[0_4px_20px_rgba(56,189,248,0.3)] hover:shadow-[0_6px_30px_rgba(56,189,248,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <GrReactjs className='w-[100px] h-[50px] text-sky-400' />
            </div>
        </div>
    );
};

export default Reactjs;
