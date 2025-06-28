import React from 'react';
import { FaCss3Alt } from 'react-icons/fa';
const Css = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-blue-300 via-blue-100 to-white border-2 border-blue-500  shadow-lg rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaCss3Alt className='w-[100px] h-[50px] text-blue-700' />
            </div>
            {/* <div className='text-center'>

                <p className='text-justify text-gray-700'>
                    CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML.

                </p>
            </div> */}
        </div>
    );
};

export default Css;