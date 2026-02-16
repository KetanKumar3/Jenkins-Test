import React from 'react';

function Step() {
  return (
    <div className='px-6 md:px-20 lg:px-30 py-10 md:py-20 flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#8176AF] gap-10 md:gap-8'>
      <div className='flex flex-col items-center text-center'>
        <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-3 md:p-4 rounded-full bg-[#C0B7E8] flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold'>01</div>
        <p className='text-lg md:text-xl lg:text-2xl font-bold pt-3 max-w-xs text-white'>3D Conception & Design</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-3 md:p-4 rounded-full bg-[#C0B7E8] flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold'>02</div>
        <p className='text-lg md:text-xl lg:text-2xl font-bold pt-3 max-w-xs text-white'>Interaction Design</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-3 md:p-4 rounded-full bg-[#C0B7E8] flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold'>03</div>
        <p className='text-lg md:text-xl lg:text-2xl font-bold pt-3 max-w-xs text-white'>VR World user Testing</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-3 md:p-4 rounded-full bg-[#C0B7E8] flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold'>04</div>
        <p className='text-lg md:text-xl lg:text-2xl font-bold pt-3 max-w-xs text-white'>Hydra VR deploy</p>
      </div>
    </div>
  );
}

export default Step;