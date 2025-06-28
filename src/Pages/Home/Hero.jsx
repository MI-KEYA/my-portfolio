import React from 'react';
import photo from '../../assets/photo.png'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className='w-4/5 mx-auto lg:flex  items-center justify-around gap-10 mt-20 border-2 border-gray-300 shadow-sm rounded-2xl py-5'>
            <div className='lg:w-2/5 lg:mx-auto flex justify-center  lg:pl-10 '>
                <img src={photo} alt="keya" className='w-[300px] border-2 rounded-full p-10' />
            </div>
            <div className='lg:w-3/5 pt-5 lg:pt-0 px-5'>
                {/* <h1 className='text-3xl font-bold'>Hi, I'm Monia Islam Keya</h1> */}
                <motion.h1

                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { duration: 3 } }}
                    className="text-5xl font-bold">Hi, I'm Monia Islam Keya
                </motion.h1>
                <p className='mt-4 font-semibold text-gray-500'>Passionate frontend developer crafting clean, responsive user interfaces using React, Tailwind,
                    and modern web technologies for impactful experiences.
                </p>
                <button className='btn mt-10 bg-black text-white rounded-2xl py-3 px-8 font-semibold'>Resume</button>
            </div>
        </div>
    );
};

export default Hero;
