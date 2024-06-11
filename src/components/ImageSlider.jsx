// ImageSlider.jsx
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ImageSlider({ images, delay, className='' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
			console.log('changed index')
    }, delay);
    return () => clearInterval(intervalId);
  }, [index, delay]);

  return (
    <div
      className={twMerge(`bg-cover transition-[background-image] duration-1000 ease-in-out bg-center`, className)} 
      style={{ backgroundImage: `url(/images/${images[index]})` }}
    />
  );
}