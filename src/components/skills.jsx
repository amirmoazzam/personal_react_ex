import React from 'react';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import bootstrap from '../assets/bootstrap.svg';
import tailwind from '../assets/tailwind.svg';
import js from '../assets/js.svg';
import ts from '../assets/typescript.svg';
import react from '../assets/react.svg';
import py from '../assets/py.svg';
import c from '../assets/c.svg';
import cpp from '../assets/cpp.svg';
import wordpress from '../assets/wordpress.svg';
import linux from '../assets/linux.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={html} alt="html icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={css} alt="css icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={bootstrap} alt="bootstrap icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={tailwind} alt="tailwind icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={js} alt="javascript icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ts} alt="typescript icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Typescript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={react} alt="react icon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={py} alt="python icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={c} alt="c language icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={cpp} alt="cpp language icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={wordpress} alt="wordpress icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Wordpress</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={linux} alt="linux icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Linux</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;