"use client";

import styles from "../styles/NewFeatures.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function NewFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <h2 className={styles.features__title}>
            New Details,
            <br />
            New Features
          </h2>
        </ScrollAnimation>

        <div className={styles.features__grid}>
          <div className={styles.features__card}>
            <div className={styles.features__phone}>
              <ScrollAnimation
                animateIn="fadeInDown"
                animateOut="fadeInUp"
                animateOnce
              >
                <img
                  src="/assets/d1.png"
                  alt="2 step KYC interface"
                  className={styles.features__image}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInUp"
                animateOnce
              >
                <img
                  src="/assets/d2.png"
                  alt="2 step KYC interface"
                  className={styles.features__image}
                />
              </ScrollAnimation>
            </div>
          </div>

          <div className={styles.features__card}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <img
                src="/assets/d3.png"
                alt="2 step KYC interface"
                className={styles.features__image}
              />
            </ScrollAnimation>
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
