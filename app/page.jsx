import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png'; // logo.png dosyasını public klasörüne koyduğunuzu varsayıyoruz

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-700 0 to-black flex justify-center items-center">
      <div className='text-white text-center text-5xl font-extrabold flex flex-row gap-72'>
        <p className='text-center animate-pulse mt-32 pr-52' >DİKKAT ÇALIŞMA VAAAR!</p>
        <Image className='rounded-full' src={logo} alt="logo" width={300} height={300} />
      </div>
    </div>
  );
};

export default HomePage;
