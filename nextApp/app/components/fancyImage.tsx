'use client'
import { useState } from 'react';
import Image from 'next/image';

type ObjectFitOption = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

type FancyImageProps = {
  src: string;
  alt: string;
  objectFit?: ObjectFitOption; 
}

export default function FancyImage({ src, alt, objectFit='cover' }: FancyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: objectFit, objectPosition: 'top',  }}
      className={`fade-in ${loaded ? 'loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
