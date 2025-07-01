'use client';
import Image from "next/image";
import styles from './Features.module.css';


export default function FeaturesSection() {
  return (
    <section className='bg-lightGreen flex flex-col justify-center items-center'>
      <div>
        <h2>All you need to enjoy some peaceful days off</h2>
      </div>

      <div className='flex justify-around'>
        <div className={styles.featureSection}>
          <Image
            src='/house.png'
            width={70}
            height={70}
            alt="house"
          />
          <h4>Home Safety</h4>
          <p>
          Worried about your house getting robbed while you are away? Your trusted friends will be there to make it look habited.
          </p>
        </div>
         <div className={styles.featureSection}>
          <Image
            src='/clipboard.png'
            width={70}
            height={70}
            alt="clipboard"
          />
          <h4>Dashboard</h4>
          <p>
            You will have a clear picture of what needs to be done, and what is already done. No task left behind!
          </p>
        </div>
         <div className={styles.featureSection}>
          <Image
            src='/paw.png'
            width={70}
            height={70}
            alt="paw"
          />
          <h4>Animal Care</h4>
          <p>
            Your pets will never feel alone again. Your caretakers will make sure to feed and comfort them, in the days you choose.
          </p>
        </div>
      </div>
    </section>
  );
}