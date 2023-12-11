import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-black h-full bg-landing bg-cover bg-no-repeat">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-600 font-bold p-2 text-xl'>
        The Future of Fast Shipping
        </p>
        <h3 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
        Next-Level Delivery System
        </h3>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Modern, flexible solution for
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Shipping']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-white'>Moving our world forward by delivering what matters.</p>
        <button className='bg-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
