import React from 'react';
import Html from './Html';
import Css from './Css';
import JavaScript from './JavaScript';
import Tailwind from './Tailwind';
import Daisyui from './Daisyui';
import Reactjs from './ReactJs';

const Skills = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto '>
                <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-20 text-center">Skills</h2>
                <div className=' p-10 border-2 border-gray-300  shadow-sm rounded-2xl'>
                    <div className=''>
                        <h1 className='font-semibold mb-3'>Frontend</h1>
                        <div className='grid grid-cols-6 gap-5'>
                            <Html /> <Css /> <Tailwind /><Daisyui /><JavaScript /><Reactjs />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='font-semibold mb-3'>Frontend</h1>
                        <div className='grid grid-cols-6 gap-5'>
                            <Html /> <Css /> <Tailwind /><Daisyui /><JavaScript /><Reactjs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;