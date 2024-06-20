import React from 'react';
import { teamMembers } from '../../utils/data';
import Image from 'next/image';
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const imagePaths = {
    instructor1: '/images/instructor1.jpg',
    instructor2: '/images/instructor2.png',
    instructor3: '/images/instructor3.jpg'
};

const TeamMembers = () => {
    return (
        <section className='w-full min-h-screen'>
            <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-end  max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-10'>
                    <div>
                        <p className='text-[#f04e3c] font-bold relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 md:text-4xl before:translate-y-[-50%]'>
                            OUR TEAM MEMBERS
                        </p>
                        <div className='text-6xl text-black mt-8 leading-[60px] font-semibold max-sm:text-3xl'>
                            <h1>OUR MOST EXPERIENCE</h1>
                            <h1>TRAINERS</h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {teamMembers.map((member) => (
                        <div key={member.name} className='group relative overflow-hidden rounded-lg shadow-lg'>
                            <div className='relative w-full h-[512px]'>
                                <Image
                                    src={imagePaths[member.img]}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute bottom-[-50px] duration-[.4s] group-hover:bottom-0 left-0 w-full group-hover:bg-red-600 p-7 pb-8'>
                                <p className='font mb-2 font-extrabold text-gray-300 relative before:absolute before:w-10 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-14 text-lg before:translate-y-[-50%] group-hover:text-white group-hover:before:bg-white'>
                                    {member.role}
                                </p>
                                <h1 className='font text-xl font-semibold text-white'>{member.name}</h1>
                                <div className='flex items-center gap-6 text-lg mt-[27px] text-white'>
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
