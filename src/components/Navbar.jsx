import React, { useState, useEffect } from 'react';
import headericon from '../assets/headericon.png';
import headername from '../assets/headername.png';
import menu from '../assets/menu.png';
import cut from '../assets/cut.png'
import closeIcon from '../assets/VRMASK.png';

function Navbar({ scrollToSection, refs }) {
  const [mobileview, setMobileview] = useState(false);

  const toggleMobileMenu = () => {
    setMobileview(!mobileview);
  };

  useEffect(() => {
    document.body.style.overflow = mobileview ? 'hidden' : 'auto';
  }, [mobileview]);

  return (
    <nav
      className="px-6 md:px-30 pt-8 flex justify-between items-center bg-[#8176AF]"
      role="navigation"
      aria-label="Main navigation"
    >

      <div className="flex items-center gap-5">
        <img src={headericon} alt="header icon" className="w-20 h-20" />
        <img src={headername} alt="header name" className="w-20 h-10" />
      </div>


      <div className="hidden md:block">
        <ul className="flex gap-10 text-white">
          <li><a href="#about" onClick={() => scrollToSection(refs.about)}>ABOUT</a></li>
          <li><a href="#services" onClick={() => scrollToSection(refs.services)}>SERVICES</a></li>
          <li><a href="#technology" onClick={() => scrollToSection(refs.technology)}>TECHNOLOGIES</a></li>
          <li><a href="#howto" onClick={() => scrollToSection(refs.howto)}>HOW TO</a></li>
        </ul>
      </div>


      <button
        className="block md:hidden"
        onClick={toggleMobileMenu}
        aria-expanded={mobileview}
        aria-controls="mobile-menu"
      >
        <img src={menu} width={50} alt="menu" />
      </button>


      <div className="space-x-4 hidden md:block">
        <button className="font-bold border border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-[#8176AF] transition-colors">
          CONTACT US
        </button>
        <button className="font-bold rounded-full px-4 py-2 bg-[#C0B7E8] hover:bg-[#a89ac8] text-white transition-colors">
          JOIN HYDRA
        </button>
      </div>


      {mobileview && (
        <div
          id="mobile-menu"
          className="fixed top-0 left-0 w-full h-full bg-[#8176AF] z-50 transition-all duration-300"
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} aria-label="Close menu" >
              <img src={cut} width={50} alt="close" />
              
            </button>
          </div>
          <ul className="flex flex-col items-center py-4 gap-6 text-white text-lg font-semibold">
            {/* Updated Mobile Menu Links */}
            <li><a href="#about" onClick={() => { scrollToSection(refs.about); toggleMobileMenu(); }}>ABOUT</a></li>
            <li><a href="#services" onClick={() => { scrollToSection(refs.services); toggleMobileMenu(); }}>SERVICES</a></li>
            <li><a href="#technology" onClick={() => { scrollToSection(refs.technology); toggleMobileMenu(); }}>TECHNOLOGIES</a></li>
            <li><a href="#howto" onClick={() => { scrollToSection(refs.howto); toggleMobileMenu(); }}>HOW TO</a></li>
          </ul>
          <div className="flex flex-col items-center py-4 space-y-4">
            <button className="font-bold border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-[#8176AF] transition-colors w-48">
              CONTACT US
            </button>
            <button className="font-bold rounded-full px-6 py-3 bg-[#C0B7E8] hover:bg-[#a89ac8] text-white transition-colors w-48">
              JOIN HYDRA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;