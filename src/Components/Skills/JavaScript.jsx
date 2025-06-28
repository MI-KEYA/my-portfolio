import React from 'react';
import { FaJsSquare } from 'react-icons/fa';

const JavaScript = () => {
    return (
        <div className='p-3 bg-gradient-to-t from-yellow-100 via-yellow-50 to-white border-2 border-yellow-300  shadow-lg rounded-2xl'>
            <div className='flex items-center justify-center'>
                <FaJsSquare className='w-[100px] h-[50px] text-yellow-300' />
            </div>
            {/* <div className='text-center'>

                <p className='text-justify text-gray-700'>
                    HTML (HyperText Markup Language) is the standard language used to create the structure of web pages.
                </p>
            </div> */}
        </div>
    );
};

export default JavaScript;