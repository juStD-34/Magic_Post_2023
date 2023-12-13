import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-3'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={'https://unblast.com/wp-content/uploads/2020/05/Delivery-Service-Illustration.jpg'} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-400 font-bold'>OUT-OF-THE-BOX SOLUTIONS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> We offer a full range of customized services. </h1>
          <p>
          Provides customers access to carrier-independent, same-day delivery with plug-and-play options
          </p>
          <button className='bg-blue-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
