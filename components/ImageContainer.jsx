import React from 'react';
import Image from 'next/image';


const ImageContainer = ({ imageSrc, altText, description }) => {
  return (
    <div className="relative group w-full h-full overflow-hidden">
      <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <p className="text-white text-xl font-extrabold">{description}</p>
      </div>
    </div>
  );
};

export default ImageContainer;
