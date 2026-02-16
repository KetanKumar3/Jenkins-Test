import React from 'react';
import icon from '../assets/headericon.png';

function Footer() {
  return (
    <footer className="bg-[#8176AF] py-10 px-6 md:px-20 lg:px-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div className="flex justify-start items-center">
          <img src={icon} alt="Company Logo" className="h-24 w-24 md:h-32 md:w-32 object-contain" />
        </div>
        <nav className="text-left">
          <ul className="text-white text-lg">
            <li className="mb-2">ABOUT</li>
            <li className="mb-2">SERVICES</li>
            <li className="mb-2">TECHNOLOGIES</li>
            <li className="mb-2">HOW TO</li>
            <li className="mb-2">JOIN HYDRA</li>
          </ul>
        </nav>
        <nav className="text-left">
          <ul className="text-white text-lg">
            <li className="mb-2">FAQ</li>
            <li className="mb-2">SITEMAP</li>
            <li className="mb-2">CONDITIONS</li>
            <li className="mb-2">LICENSES</li>
          </ul>
        </nav>
        <div className="flex flex-col  md:items-start text-left">
          <h2 className="text-lg font-semibold text-white mb-4">SOCIALIZE WITH HYDRA</h2>
          <button className="font-bold rounded-full px-6 py-3 bg-[#C0B7E8] hover:bg-[#a89ac8] text-black transition-colors w-48">
            Build Your World
          </button>
        </div>
      </div>
      <div className='bg-white w-full h-0.5 my-8'></div>
      <h2 className='text-white font-bold text-center text-sm md:text-base'>Create With ❤️ By @KetanKumar</h2>
    </footer>
  );
}

export default Footer;