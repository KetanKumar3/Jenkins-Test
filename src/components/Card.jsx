import React from 'react';
import simulationimage from '../assets/simulationimage.png';
import educationimage from '../assets/EDUCATION.png';
import selfcareimage from '../assets/SELFCARE.png';
import outdoorimage from '../assets/OUTDOOR.png';

function Card() {
  const cardData = [
    {
      id: 1,
      image: simulationimage,
      title: "SIMULATION",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
      id: 2,
      image: educationimage,
      title: "EDUCATION",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
      id: 3,
      image: selfcareimage,
      title: "SELF-CARE",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
      id: 4,
      image: outdoorimage,
      title: "OUTDOOR",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
    }
  ];

  return (
    <>
      <div className='px-6 md:px-20 lg:px-30 pt-10 pb-10 bg-[#8176AF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {cardData.map((item) => (
          <div className='flex flex-col justify-center items-center rounded-2xl bg-[#211E2E] text-white p-6 md:p-8 space-y-4 text-center' key={item.id}>
            <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <p className='text-gray-300'>{item.description}</p>
            <button className='font-bold rounded-full px-6 py-3 bg-[#C0B7E8] text-black hover:bg-[#a89ac8] transition-colors'>TRY IT NOW</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;