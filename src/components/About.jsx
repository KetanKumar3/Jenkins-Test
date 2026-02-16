import React from 'react';
import vrMaskImage from '../assets/VRMASK.png';

function About() {
  return (
    <>
      <div className='px-6 md:px-20 lg:px-30 pt-12 flex flex-col md:flex-row justify-between items-center bg-[#8176AF] gap-10 md:gap-20'>
        <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
          <img src={vrMaskImage} alt="VR Mask" className='rounded-4xl max-w-full h-auto' />
        </div>
        <div className='w-full md:w-1/2 md:pr-10 space-y-5 text-white text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-bold'>ABOUT</h2>
          <h2 className='text-3xl md:text-4xl'>HYDRA VR</h2>
          <p className='text-base md:text-lg'>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
            n tempors.
          </p>
          <div>
            <button className='font-bold rounded-full px-6 py-3 bg-[#C0B7E8] text-black hover:bg-[#a89ac8] transition-colors'>
              Let's Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;