import React from 'react';

const ImageWithHoverText = ({ src, alt, text }) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-auto hover:blur-lg transition duration-500 ease-in-out" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
        <p className="text-yellow-300 bg-black p-1 rounded-md text-xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default ImageWithHoverText;
