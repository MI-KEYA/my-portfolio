import React from 'react';
import Hero from './Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Education from '../../Components/Education/Education';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
        </div>
    );
};

export default Home;