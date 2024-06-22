    import React from 'react';
    import Image from 'next/image';

    const imagePaths = [
        { src: '/images/instructor2.png', alt: 'Gallery Image 1' },
        { src: '/images/instructor2.png', alt: 'Gallery Image 2' },
        { src: '/images/instructor2.png', alt: 'Gallery Image 3' },
        { src: '/images/instructor2.png', alt: 'Gallery Image 4' },
        { src: '/images/instructor2.png', alt: 'Gallery Image 5' },
        { src: '/images/instructor2.png', alt: 'Gallery Image 6' }
    ];

    const Gallery = () => {
        return (
            <section className='w-full min-h-screen'>
                <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-end  max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-10'>
                        <div>
                            <p className='text-[#f04e3c] font-bold relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 md:text-4xl before:translate-y-[-50%]'>
                                GALERİ
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10 mt-20'>
                        {imagePaths.map((image, index) => (
                            <div key={index} className='relative group'>
                                <div className='relative w-full h-72 overflow-hidden rounded-lg shadow-lg'>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className='group-hover:scale-110 transition-transform duration-300'
                                    />
                                </div>
                                <div className='    '>
                                    <p className='text-white text-lg font-semibold'>
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    export default Gallery;
