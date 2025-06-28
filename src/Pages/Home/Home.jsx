import React from 'react';
import Hero from './Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
        </div>
    );
};

export default Home;