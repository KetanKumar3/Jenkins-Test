import React from 'react';
import technology from '../assets/technology.png';
import hydra1 from '../assets/Hydra-Tech1.png';
import hydra2 from '../assets/Hydra-Tech2.png';
import hydra3 from '../assets/Hydra-Tech3.png';
import hydra4 from '../assets/Hydra-Tech4.png';

function Technology() {
  return (
    <>
      <div className='px-6 md:px-20 lg:px-30 pt-10 md:pt-20 bg-[#8176AF]'>
        <div
          className='p-10 md:p-20 rounded-full space-y-3 bg-cover bg-center mx-auto max-w-5xl flex flex-col items-center justify-center'
          style={{ backgroundImage: `url(${technology})` }}
        >
          <h2 className='text-center text-white text-3xl md:text-4xl font-bold'>TECHNOLOGIES & HARDWARE</h2>
          <h3 className='text-center text-white text-xl md:text-2xl'>USED BY HYDRA VR.</h3>
        </div>

        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center py-10 md:py-20 gap-8 md:gap-4'>
          <img className='h-32 md:h-44 mt-0 md:mt-8 max-w-full object-contain' src={hydra1} alt='Hydra Tech 1' />
          <img className='h-32 md:h-60 max-w-full object-contain' src={hydra2} alt='Hydra Tech 2' />
          <img className='h-32 md:h-60 max-w-full object-contain' src={hydra3} alt='Hydra Tech 3' />
          <img className='h-32 md:h-60 max-w-full object-contain' src={hydra4} alt='Hydra Tech 4' />
        </div>
      </div>
    </>
  );
}

export default Technology;