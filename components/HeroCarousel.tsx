"use client";
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    {imgUrl: '/assets/images/hero-2.svg', alt: 'chair'},
    {imgUrl: '/assets/images/hero-3.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-4.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-5.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
    <Carousel
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true} 
    showStatus={false}
    showArrows={false}
    interval={3000}
    
    >
        {heroImages.map((image, index) => (
            <Image
                key={index}
                src={image.imgUrl}
                alt={image.alt}
                width={500}
                height={500}
            />
        ))}
</Carousel>
            <Image
            src='/assets/icons/hand-drawn-arrow.svg'
            alt='arrow'
            width={150}
            height={150}
            className='max-xl:hidden absolute -left-[15%] bottom-[80px] '
            />

</div>
  )
}

export default HeroCarousel