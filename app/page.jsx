import React from 'react';
import Navbar from '@/components/Navbar';
import ImageContainer from '@/components/ImageContainer';

const images = [
  {
    src: '/testphotofitness.jpg', // Replace with your image paths
    alt: 'Image 1',
    description: 'FITNESS'
  },
  {
    src: '/testphotoswim.jpg',
    alt: 'Image 2',
    description: 'YÜZME'
  },
  {
    src: '/testphotopilates.jpg',
    alt: 'Image 3',
    description: 'REFORMER PİLATES'
  },
];

const HomePage = () => {
  return (
    <div className='bg-black w-screen h-screen  max-h-full flex flex-col'>
      <Navbar />
      <div className='relative flex-grow'>
        {/* <img
          className='absolute w-full h-full object-cover'
          src='./testphoto.jpg'
          alt=""
        /> */}
        <div className='absolute inset-0 flex flex-col justify-center items-center gap-6'>
            <h1 className='text-white md:text-7xl text-5xl font-bold mb-2'>
              ALPHA FITNESS
            </h1>
            <p className='text-white md:text-xl text-lg mb-4'>
              Isparta'nın En Kapsamlı Spor Salonu
            </p>
            <button className='bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 shadow-lg'>
              Ailemize Katıl
            </button>
        </div>
      </div>
      <div className='hidden md:flex flex-row justify-center gap-12 p-4'>
        {images.map((image, index) => (
          <div key={index} className='w-1/3 h-full relative'>
            <ImageContainer
              imageSrc={image.src}
              altText={image.alt}
              description={image.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
