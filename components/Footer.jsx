import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="font-bold text-lg mb-4">İletişim</h2>
                        <p><MdPhone /> +90 555 123 4567</p>
                        <p><MdEmail /> info@alphawellness.com</p>
                        <p className="flex items-center"><FaWhatsapp /> <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-gray-300">WhatsApp'ta Konuşma Başlat</a></p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Hızlı Linkler</h2>
                        <Link href="/" className="block hover:text-gray-300">Anasayfa</Link>
                        <Link href="/services" className="block hover:text-gray-300 ">Hizmetlerimiz</Link>
                        <Link href="/about" className="block hover:text-gray-300">Hakkımızda</Link>
                    </div>
                    <div className=' flex flex-col'>
                        <h2 className="font-bold text-lg mb-4">Sosyal Medya</h2>
                        <p className="flex items-center"><FaInstagram /> <a href="https://www.instagram.com/alphawellnesstr/" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-gray-300">Instagram'da Takip Et</a></p>
                        <Image src="/logo.jpg" alt="Alpha Wellness Logo" width={250} height={250} className="mt-4" />
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>© {new Date().getFullYear()} Alpha Wellness. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;