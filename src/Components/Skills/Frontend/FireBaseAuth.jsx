import React from 'react';
import { IoLogoFirebase } from 'react-icons/io5';

const FireBaseAuth = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-orange-200 via-yellow-50 to-white border-2 border-orange-400 shadow-[0_4px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_6px_30px_rgba(250,204,21,0.5)] hover:scale-105 transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <IoLogoFirebase className='w-[100px] h-[50px] text-orange-500' />
            </div>
        </div>
    );
};

export default FireBaseAuth;