import React from 'react';
import vrBoxImage from '../assets/VRBOX.png';
import technologyBg from '../assets/technology.png';

function Home() {
  return (
    <>
      <div className='px-6 md:px-20 lg:px-30 pt-8 flex flex-col md:flex-row justify-between items-center bg-[#8176AF] gap-10 md:gap-20'>
        <div className='w-full md:w-1/2 md:pr-10 space-y-5 text-center md:text-left'>
          <h2 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
            <span className='text-[#C0B7E8]'>Dive </span>into the depth of{' '}
            <span className='text-[#C0B7E8]'>Virtual Reality</span>
          </h2>
          <p className='text-white text-base md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.
          </p>
          <div>
            <button className='font-bold rounded-full px-6 py-3 bg-[#C0B7E8] text-white hover:bg-[#a89ac8] transition-colors'>
              Build Your World
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img src={vrBoxImage} alt="VR headset" className="max-w-full h-auto" />
        </div>
      </div>

      <div className='px-6 md:px-20 lg:px-30 pt-10 md:pt-20 bg-[#8176AF]'>
        <div
          className='p-10 md:p-20 rounded-full space-y-3 bg-cover bg-center mx-auto max-w-5xl flex flex-col items-center justify-center'
          style={{ backgroundImage: `url(${technologyBg})` }}
        >
          <h2 className='text-center text-white text-3xl md:text-4xl font-bold'>About & Purpose</h2>
          <h3 className='text-center text-white text-xl md:text-2xl'>USED BY HYDRA VR.</h3>
        </div>
      </div>
    </>
  );
}

export default Home;