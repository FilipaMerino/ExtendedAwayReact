"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className='bg-lightGreen flex justify-between'>
      <div className='flex flex-col justify-center'>
        <Image
          src='/logo.png'
          width={350}
          height={500}
          alt="Logo"
        />
        <p className='w-[50rem] my-5 mr-[10px]'>
          Tired of returning home from a trip to find dead plants and an open window? ExtendedAway gives you peace of mind by making it easier for you and your friends, neighbors, and family to quickly check up on your home while you are away.
        </p>
        <Link href="/about">Learn More</Link>
        aqui vai ter um botão
      </div>

   <div>
    <Image
      src='/heroSectionPic.jpg'
      width={500}
      height={500}
      alt="Logo"
      className='object-cover h-[35rem]'
    />
   </div>
    </section>
  );
}



