'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCycle } from 'framer-motion';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    { name: 'ANASAYFA', path: '/' },
    { name: 'HAKKIMIZDA', path: '/about' },
    { name: 'HİZMETLERİMİZ', path: '/services' },
    { name: 'EĞİTMENLERİMİZ', path: '/instructors' },
    { name: 'İLETİŞİM', path: '/contact' }
  ];

  const [text, setText] = useState('ALPHAWELLNESS');
  const [visible, setVisible] = useState(true);
  const [xPos, setXPos] = useState('-50%');


  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prevVisible => !prevVisible);
      setXPos(prevXPos => prevXPos === '-50%' ? '0' : '-50%');

    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="h-[12vh] flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="flex items-center">
      <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: xPos }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-[12vh] w-auto flex items-center justify-center text-4xl font-bold text-white"
        >
          {text}
        </motion.div>
      </div>

      <div className="hidden md:flex space-x-8 text-xl font-bold">
        {links.map((link, index) => (
          <motion.div key={index} whileTap={{ scale: 0.9 }} className="relative group">
            <Link href={link.path} className="text-white hover:text-gray-300 transition duration-300 relative group">
              <span className="inline-block relative z-10">{link.name}</span>
              <motion.span
                className="absolute left-0 top-0 w-full h-full bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                whileHover={{ scaleX: [0, 1], originX: 0 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Responsive Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setToggleMenu(!toggleMenu)} className="w-10 h-6 flex flex-col justify-between">
          <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
          <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
          <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <motion.div initial="closed" animate={toggleMenu ? "open" : "closed"} className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50">
          {links.map((link, index) => (
            <motion.div key={index} variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}>
              <Link href={link.path} onClick={() => setToggleMenu(false)}>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
