import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-blue-600'>Magic Post</h1>
      <ul className='hidden md:flex'>
        <li className='link'>Home</li>
        <li className='link'>Company</li>
        <li className='link'>Resources</li>
        <li className='link'>About</li>
        <li className='link'>Contact</li>
        <NavLink to={"/employee/create"} className='text-center bg-blue-400 w-[70px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Login</NavLink>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-400 ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-blue-600 m-4'>REACT.</h1>
          <li className='link border-b border-gray-600'>Home</li>
          <li className='link border-b border-gray-600'>Company</li>
          <li className='link border-b border-gray-600'>Resources</li>
          <li className='link border-b border-gray-600'>About</li>
          <li className='link'>Contact</li>
          <NavLink to={"/employee/create"} className='link bg-blue-400 w-[70px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Login</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
