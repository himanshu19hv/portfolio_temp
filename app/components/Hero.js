'use client';

import styles from '../styles/Hero.module.scss';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero from '../../public/assets/hero.png';
import Image from '@/node_modules/next/image';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__image}>
          <Image 
            src={hero} 
            alt="Forex Platform Interface"
            layout='responsive'
          />
        </div>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Building Fly Forex's Seamless Remittance Platform
          </h1>
          <p className={styles.hero__description}>
          Sending money abroad should be simple, but for many users, it’s anything but. Hidden fees, redundant KYC steps, and confusing interfaces create a frustrating experience in an industry where trust is paramount. Users want to focus on what matters—helping their loved ones—without worrying about complex forms or unpredictable transaction times. This case study delves into how we identified and addressed these pain points, crafting a user-centric remittance platform that streamlines the process and builds confidence at every step.
          </p>
          <span className={styles.hero__subdescription}>Following my NDA, I have left out or tweaked any sensitive information in the course of framing this case study. What you read here might not match with the Fly’s official stance
          </span>
        </div>
      </div>
    </section>
  );
}