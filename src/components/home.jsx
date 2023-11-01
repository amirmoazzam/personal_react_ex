import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-orange-600'>Hello there, welcome to</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] capitalize'>amir moazzam</h1>
            <h3 className='text-3xl sm:text-5xl font-bold text-[#8892ba]'>personal website</h3>
            <p className='text-[#8892ba] py-4 max-w-[700px] capitalize'>i'm react frontend web developer. i'm a self-thought programmer and i started my work from 2020. it's my pleasure to read more about me in my resume.</p>
            <div>
                <button className='group text-white font-bold border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-white duration-500'>
                    view work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;