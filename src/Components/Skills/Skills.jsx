import React from 'react';
import Html from './Frontend/Html';
import Css from './Frontend/Css';
import JavaScript from './Frontend/JavaScript';
import Tailwind from './Frontend/Tailwind';
import Daisyui from './Frontend/Daisyui';
import Reactjs from './Frontend/ReactJs';
import Nodejs from './Backend/Nodejs';
import Expressjs from './Backend/Expressjs';
import Mongodb from './Backend/Mongodb';
import VsCodeTool from './Tools/VsCodeTool';
import GithubTool from './Tools/GithubTool';
import GitTool from './Tools/GitTool';
import FireBaseAuth from './Frontend/FireBaseAuth';

const Skills = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto '>
                <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-20 text-center">Skills</h2>
                <div className=' p-10 border-2 border-gray-300  shadow-sm rounded-2xl'>
                    <div className='flex items-center  gap-20'>
                        <div className='w-2/3'>
                            <h1 className='font-bold mb-3'>Frontend</h1>
                            <div className='grid grid-cols-6 gap-5'>
                                <Html /> <Css /> <Tailwind /><JavaScript /><Reactjs /><FireBaseAuth />
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <h1 className='font-bold mb-3'>Backend</h1>
                            <div className='grid grid-cols-3 gap-5'>
                                <Nodejs /> <Expressjs /><Mongodb />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 mt-10'>
                        <h1 className='font-bold mb-3'>Tools</h1>
                        <div className='grid grid-cols-3 gap-5'>
                            <VsCodeTool /> <GithubTool /> <GitTool />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;