import React from 'react';
import { FaHtml5 } from 'react-icons/fa';

const Html = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-orange-300 via-orange-100 to-white border-2 border-orange-500  shadow-lg rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaHtml5 className='w-[100px] h-[50px] text-orange-600' />
            </div>
            {/* <div className='text-center'>

                <p className='text-justify text-gray-700'>
                    HTML (HyperText Markup Language) is the standard language used to create the structure of web pages.
                </p>
            </div> */}
        </div>
    );
};

export default Html;