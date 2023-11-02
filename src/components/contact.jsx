import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5340dc1e-d54e-4090-bbef-a28aabe268bb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>contact</p>
                <p className='text-gray-300 py-4'>submit form bellow or shoot me an email - amirhassan@duck.com</p>
            </div>
            <input type="text" name="name" placeholder='Name' className='p-2 bg-[#ccd6f6]'/>
            <input type="email" name="email" placeholder='Email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" rows="10" placeholder='Write yor message here...' className='p-2 bg-[#ccd6f6]'></textarea>
            <button type='submit' className='text-white border-2 hover:border-orange-600 hover:bg-orange-600 duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's collabrate</button>
        </form>
    </div>
  )
}

export default Contact;