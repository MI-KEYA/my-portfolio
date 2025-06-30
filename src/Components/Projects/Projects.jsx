import React from 'react';
import PlantCare from './PlantCare';
import AthleticHub from './AthleticHub';
import AppStore from './AppStore';

// ✅ Your actual image path

const Projects = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-10'>Projects</h1>
            <PlantCare />
            <AthleticHub />
            <AppStore />

        </div>
    );
};

export default Projects;
