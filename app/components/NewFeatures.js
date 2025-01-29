'use client';

import styles from '../styles/NewFeatures.module.scss';

export default function NewFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.features__title}>
          New Details,<br />New Features
        </h2>

        <div className={styles.features__grid}>
          <div className={styles.features__card}>
            <div className={styles.features__phone}>
              <img 
                src="/assets/d1.png" 
                alt="2 step KYC interface"
                className={styles.features__image}
              />
               <img 
                src="/assets/d2.png" 
                alt="2 step KYC interface"
                className={styles.features__image}
              />
            </div>
          </div>

          <div className={styles.features__card}>
          {/* <div className={styles.features__phone}>
              <img 
                src="/assets/d2.png" 
                alt="2 step KYC interface"
                className={styles.features__image}
              />
            </div> */}
             <img 
                src="/assets/d3.png" 
                alt="2 step KYC interface"
                className={styles.features__image}
              />
          </div>
          </div>
          <div>
          {/* <div className={styles.features__card}>
          <div className={styles.features__phone}>
              <img 
                src="/assets/d3.png" 
                alt="2 step KYC interface"
                className={styles.features__image}
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}