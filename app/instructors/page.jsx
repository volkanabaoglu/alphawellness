import React from 'react';
import { teamMembers } from '../../utils/data';
import Image from 'next/image';
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const imagePaths = {
    instructor1: '/TrainersImages/instructor2.png',
    instructor2: '/TrainersImages/instructor1.jpg',
    instructor3: '/TrainersImages/instructor3.jpg'
};

const TeamMembers = () => {
    // Assume the first member is the patron
    const patron = teamMembers[0];
    const otherMembers = teamMembers.slice(1);

    return (
        <section className='w-full min-h-screen'>
            <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='flex flex-col items-start mb-10'>
                    <p className='text-[#f04e3c] font-bold relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 md:text-4xl before:translate-y-[-50%]'>
                        EĞİTMEN KADROMUZ
                    </p>
                </div>

                {/* Patron Section */}
                <div className='flex justify-center items-center relative overflow-hidden rounded-lg shadow-lg mb-12 bg-transparent w-full md:w-2/3 lg:w-1/2 mx-auto p-5 border-2 border-custom-red bg-transparent'>

                    {/* Resim Alanı */}
                    <div className='relative w-full md:w-1/2 h-[512px]'>
                        <Image
                            src={imagePaths[patron.img]}
                            alt={patron.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className='rounded-t-lg'
                        />
                    </div>
                    {/* Metin Alanı */}
                    <div className='flex flex-col justify-center items-center p-6 w-full md:w-1/2 '>
                        <h1 className='text-2xl font-bold text-white'>Mert Akay</h1>
                        <p className='text-lg text-white mt-2'>Owner</p>
                        <p className='mt-4 text-white leading-relaxed'>
                            Mert Akay, eğitim sektöründe 15 yılı aşkın deneyime sahip olan bir liderdir.
                            Yüksek motivasyonu ve ileri görüşlülüğü ile takımımızı her zaman daha ileriye taşımayı başarmıştır.
                            Mert, yenilikçi yaklaşımları ve güçlü liderlik becerileri sayesinde ekibimize ilham veren bir figürdür.
                            Onun yönetiminde, birçok başarılı proje gerçekleştirdik ve sektörde örnek teşkil eden bir kurum haline geldik.
                        </p>
                        <div className='flex items-center gap-4 mt-4'>
                            <a href={patron.facebook} target="_blank" rel="noopener noreferrer" className='text-[#3b5998]'>
                                <BiLogoFacebook size={24} />
                            </a>
                            <a href={patron.twitter} target="_blank" rel="noopener noreferrer" className='text-[#1DA1F2]'>
                                <BsTwitter size={24} />
                            </a>
                            <a href={patron.instagram} target="_blank" rel="noopener noreferrer" className='text-[#E4405F]'>
                                <BsInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>



                {/* Other Members Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {otherMembers.map((member) => (
                        <div key={member.name} className='group relative overflow-hidden rounded-lg shadow-lg'>
                            <div className='relative w-full h-[512px]'>
                                <Image
                                    src={imagePaths[member.img]}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute bottom-[-50px] duration-[.4s] group-hover:bottom-0 left-0 w-full group-hover:bg-red-600 p-7 pb-8'>
                                <p className='mb-2 font-extrabold text-gray-300 text-lg pl-14 group-hover:text-white'>
                                    {member.role}
                                </p>
                                <h1 className='text-xl font-semibold text-white'>{member.name}</h1>
                                <div className='flex items-center gap-6 text-lg mt-4 text-white'>
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer"><BiLogoFacebook /></a>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;
