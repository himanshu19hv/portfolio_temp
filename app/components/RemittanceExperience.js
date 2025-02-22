'use client';

import styles from '../styles/RemittanceExperience.module.scss';
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css"
export default function RemittanceExperience() {
  return (
    <section className={styles.experience}>
      <div className="container">
      <ScrollAnimation animateIn='fadeInUp' animateOut='fadeInUp' animateOnce>
        <h2 className={styles.experience__title}>
          A no nonsense<br />remittance experience
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn='fadeInUp' animateOut='fadeInUp' animateOnce>
        <div className={styles.experience__phones}>
        <img 
              src="/assets/remExp.png" 
              alt="Payment successful screen"
              // className={styles.experience__image}
            />
          </div>
          </ScrollAnimation>
          {/* <div className={styles.experience__phone}>
            <img 
              src="/assets/remExp.png" 
              alt="Payment successful screen"
              // className={styles.experience__image}
            />
          </div> */}
          {/* <div className={`${styles.experience__phone} ${styles.experience__phone_middle}`}>
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80" 
              alt="Transaction history screen"
              className={styles.experience__image}
            />
          </div>
          <div className={styles.experience__phone}>
            <img 
              src="https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?auto=format&fit=crop&w=1200&q=80" 
              alt="Send money screen"
              className={styles.experience__image}
            />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}