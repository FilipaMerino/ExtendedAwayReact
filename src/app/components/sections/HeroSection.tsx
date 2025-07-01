import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className='flex bg-lightGreen'>
      <div>
        <Image
          src='/logo.png'
          width={500}
          height={500}
          alt="Logo"
        />
        <p>
          Tired of returning home from a trip to find dead plants and an open window? ExtendedAway gives you peace of mind by making it easier for you and your friends, neighbors, and family to quickly check up on your home while you are away.
        </p>
        <Link href="/about">Learn More</Link>
        <button>Get started</button>
      </div>

   <div>
    <Image
      src='/heroSectionPic.jpg'
      width={500}
      height={500}
      alt="Logo"
    />
   </div>
    </section>
  );
}



