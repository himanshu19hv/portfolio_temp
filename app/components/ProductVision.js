'use client';

import Image from '@/node_modules/next/image';
import styles from '../styles/ProductVision.module.scss';
import hero2 from '../../public/assets/hero-2.png';
export default function ProductVision() {
  return (
    <section className={styles.vision}>
      <div className="container">
        <h2 className={styles.vision__title}>Product Vision</h2>
        <div className={styles.vision__content}>
          <p className={styles.vision__text}>
            Our design vision was rooted in the <span className={styles.vision__highlight}>principle of Empathy through Simplicity</span>. 
            In a domain as sensitive as remittance, where  <span className={styles.vision__highlight}>every interaction impacts trust</span>, the challenge was not just to design a product but to redefine how users perceive financial transactions. We sought to create an experience that was <span className={styles.vision__highlight}>intuitive, transparent, and empowering</span> - where users felt confident and in control of every step.
          </p>
          <p className={styles.vision__text}>Though I spearheaded the Design I also got to lead the task as a Product Strategist, leading user research, bank integrations, and the end-to-end product journey. My focus was to amalgamate business goals with user needs & create an intuitive, robust & scalable experience .</p>
        </div>
        <Image src={hero2} layout='responsive'  alt="product vision" width={"100%"}/>
      </div>
    </section>
  );
}