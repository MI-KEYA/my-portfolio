import React from 'react';
import { SiMongodb } from 'react-icons/si';

const Mongodb = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-green-100 via-green-50 to-white border-2 border-green-300
            shadow-[0_4px_20px_rgba(34,197,94,0.3)]
            hover:shadow-[0_6px_30px_rgba(34,197,94,0.5)]
            hover:scale-105
            transition duration-300 ease-in-out rounded-2xl'>
            <div className='flex items-center justify-center'>
                <SiMongodb className='w-[100px] h-[50px] text-green-600' />
            </div>
        </div>
    );
};

export default Mongodb;
