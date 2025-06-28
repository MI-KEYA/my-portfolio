import React from 'react';

const AboutMe = () => {
    return (
        <div className="w-4/5  mx-auto mt-30 border-2 border-gray-300 rounded-2xl p-8 bg-white shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-6 text-center">About Me</h2>
            <p className="text-lg leading-8 text-gray-700 text-justify">
                <span className="text-2xl font-semibold text-black">I</span>’m a final-year <span className="font-semibold">Software Engineering</span> student majoring in <span className="font-semibold">Data Science</span> at Daffodil International University. Becoming a software engineer has always been my greatest ambition, and that passion led me to begin my journey into web development.
                <br /><br />
                I love creating beautiful, functional websites and exploring modern design trends. <span className="italic">Learning</span> is at the heart of everything I do—whether it's discovering new technologies, refining my coding skills, or staying up to date with industry best practices.
                <br /><br />
                Beyond programming, I have a deep appreciation for <span className="font-medium">literature</span>, <span className="font-medium">minimalist line art</span>, and <span className="font-medium">language learning</span>—both programming languages and spoken ones. I'm always eager to grow, both personally and professionally, and I believe that <span className="text-black font-semibold">curiosity</span> is one of my strongest assets.
            </p>
        </div>
    );
};

export default AboutMe;
