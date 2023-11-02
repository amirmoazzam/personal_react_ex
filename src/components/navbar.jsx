import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="logo image" style={{width: '60px'}}/>
        </div>
        
        {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
                <Link to='works' smooth={true} duration={500}>Works</Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* hanburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='skills' smooth={true} duration={500}>Skills</Link>    
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='works' smooth={true} duration={500}>Works</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}