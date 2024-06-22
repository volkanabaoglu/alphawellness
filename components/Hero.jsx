import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero bg-cover bg-center bg-no-repeat h-screen relative overflow-hidden">
            <Image
                src="/havuz.png"
                alt="Havuz Görüntüsü"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority 
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/60"></div>
            <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4 z-20 relative">
                <h1 className="text-5xl font-bold mb-4 text-white shadow-lg animate-fadeInLeft">Alpha Wellness'a Hoş Geldiniz</h1>
                <p className="text-xl mb-4 text-white shadow animate-fadeInRight">Sağlıklı yaşamın kapılarını aralayın.</p>
                <p className="text-md font-bold mb-8 text-white shadow animate-fadeInRight">Ispartanın En Kapsamlı Spor Kompleksi</p>
                <Link href="/contact" className="bg-white hover:bg-blue-700 text-black font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
                        Bize Ulaşın
                </Link>
            </div>
        </div>
    );
}

export default Hero;