// components/Navbar.jsx
'use client'
// components/Navbar.jsx

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
    { name: 'HAKKIMIZDA', path: '/about' },
    { name: 'HİZMETLERİMİZ', path: '/services' },
    { name: 'EĞİTMENLERİMİZ', path: '/instructors' },
    { name: 'GALERİ', path: '/gallery' },
    { name: 'İLETİŞİM', path: '/contact' }
];

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="h-[12vh] flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative z-10">
            <div className="flex items-center">
                <Link href={'/'} className="h-[12vh] w-auto flex items-center justify-center text-4xl font-bold text-white ">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        ALPHAWELLNESS
                    </motion.span>
                </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-xl font-bold">
                {links.map((link, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }} className="relative group">
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
                <motion.button onClick={() => setToggleMenu(!toggleMenu)} whileTap={{ scale: 0.9 }} className="w-10 h-6 flex flex-col justify-between">
                    <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
                    <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
                    <motion.div animate={toggleMenu ? "open" : "closed"} className="w-8 h-1 bg-white rounded"></motion.div>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {toggleMenu && (
                <motion.div initial="hidden" animate="visible" className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50"
                    variants={menuVariants}
                >
                    {links.map((link, index) => (
                        <motion.div key={index} variants={itemVariants} custom={index}>
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

const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 }
};

const menuVariants = {
    visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
    hidden: { opacity: 0 }
};

export default Navbar;
