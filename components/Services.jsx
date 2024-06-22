import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, description, imgSrc }) => {
    return (
        <div className="transition duration-300 ease-in-out transform hover:scale-105 h-full">
            <div className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                <div className="relative w-full h-48">
                    <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg"/>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="flex-grow">{description}</p>
                </div>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <div className="container mx-auto px-4 my-12">
            <h1 className='text-white text-center font-bold border-b-2 flex justify-center text-3xl pb-5 '>HİZMETLERİMİZ</h1>
            <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <ServiceCard
                    title="Fitness "
                    description="En son ekipmanlar ile donatılmış fitness salonumuzda sağlığınıza yatırım yapın."
                    imgSrc="/fitness.jpg"
                />
                <ServiceCard
                    title="Yüzme Havuzu"
                    description="Olimpik boyutlardaki yüzme havuzumuzda yüzme dersleri alabilirsiniz."
                    imgSrc="/havuz.png"
                />
                <ServiceCard
                    title="Reformer Pilates"
                    description="Mert Abi reformer pilates ne demek bilmiyom."
                    imgSrc="/reformerpilates.jpg"
                />
            </div>
        </div>
    );
}

export default Services;