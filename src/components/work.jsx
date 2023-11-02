import React, { useState } from 'react';
import takwinstore from '../assets/takwinstore/tw1.png'

const Works = () => {
    const [works,setWorks] = useState([1,2,3,4])
  return (
    <div name='works' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>works</p>
                <p className='py-6'>check out some of my recent works</p>
            </div>

            {/* cards container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid-iterm / card */}
                {works.map(work => (
                    <div key={work.id} style={{backgroundImage: `url(${takwinstore})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>takwin store</span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Works;