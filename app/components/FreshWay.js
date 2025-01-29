'use client';

import Image from '@/node_modules/next/image';
import styles from '../styles/FreshWay.module.scss';

export default function FreshWay() {
  return (
    <>
    <section className={styles.freshWay}>
       <div>
      <Image src={'/assets/presenting.png'} layout={'fill'}/>
      </div>
      <div className="container">
        <span className={styles.freshWay__tag}>presenting</span>
        
        <h2 className={styles.freshWay__title}>
          A Fresh way to Send<br />Money Abroad
        </h2>

        <div className={styles.freshWay__present1}>
        <div className={styles.freshWay__phone}>
              <img 
                src="/assets/presenting1.png" 
                alt="Homepage interface"
                className={styles.freshWay__image}
              />
            </div>
          <div className={styles.freshWay__feature}>
            <div className={styles.freshWay__vector}>
            <div className={styles.freshWay__card}>
              <h3>a homepage<br />designed for you</h3>
              <p>Stay proactive in saving the send rates and completing it to get the<br/> desired remittance amount</p>
            </div>
            </div>
          </div>

        </div>
        <div className={styles.freshWay__grid}>
        <div className={styles.freshWay__phone}>
              <img 
                src="/assets/presenting2.png" 
                alt="Homepage interface"
                // className={styles.freshWay__image}
              />
            </div>
            <div className={styles.freshWay__phone}>
              <img 
                src="/assets/presenting3.png" 
                alt="Homepage interface"
                // className={styles.freshWay__image}
              />
            </div>
            </div>
      </div>
    </section>
    <section className={styles.freshWay__remittance}>
    <div className="container">
          <h2 className={styles.freshWay__subtitle}>
            Remittances tailored<br />for everyone
          </h2>

          <div className={styles.freshWay__types}>
            <div className={styles.freshWay__type}>
              <div className={styles.freshWay__content}>
                <h3>for the one's that don't<br />have an existing account<br />with the bank</h3>
                <p>For the users who do not have to existing account with the bank and would like to send money abroad. Here is the solution where they can create an account with the bank and start sending money to their loved ones. The process is very simple and can be handled on the platform.</p>
              </div>
              <div className={styles.freshWay__phone}>
                <img 
                  src="https://images.unsplash.com/photo-1581291518484-8d11f356e937?auto=format&fit=crop&w=600&q=80" 
                  alt="Non-existing account interface"
                  className={styles.freshWay__image}
                />
              </div>
            </div>

            <div className={styles.freshWay__type}>
              <div className={styles.freshWay__phone}>
                <img 
                  src="https://images.unsplash.com/photo-1581291518744-5ae5c9a3f1f4?auto=format&fit=crop&w=600&q=80" 
                  alt="Existing account interface"
                  className={styles.freshWay__image}
                />
              </div>
              <div className={styles.freshWay__content}>
                <h3>for the one's that have an<br />existing bank account<br />with the bank</h3>
                <p>The users in case who were existing with the bank would have the ease to use the app right away. They can directly be authenticated with their existing bank details and start sending money to their loved ones. The process is very simple and can be handled on the platform.</p>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  );
}