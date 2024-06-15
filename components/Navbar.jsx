import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="h-[12vh] md:flex flex-row justify-around hidden items-center">
      <Image className='h-[12vh] w-auto' src="/logo.png" alt="logo" width={50} height={50} priority />
      <ul className="flex justify-end items-center space-x-4 text-xl font-bold flex-row gap-8 font">
        <li className="text-white">
          <Link href="/">ANASAYFA</Link>
        </li>
        <li className="text-white">
          <Link href="/about">HAKKIMIZDA</Link>
        </li>
        <li className="text-white">
          <Link href="/services">HİZMETLERİMİZ</Link>
        </li>
        <li className="text-white">
          <Link href="/trainers">EĞİTMENLERİMİZ</Link>
        </li>
        <li className="text-white">
          <Link href="/contact">İLETİŞİM</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
