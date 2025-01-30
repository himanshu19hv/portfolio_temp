"use client";

import styles from "../styles/Seamless.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function NewFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <h2 className={styles.features__title}>
              Remittances were never <br /> so seamless
            </h2>
          </ScrollAnimation>

          <div className={styles.features__grid}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.features__card}>
                <img
                  src="/assets/seam1.png"
                  alt="2 step KYC interface"
                  className={styles.features__image}
                />
              </div>
            </ScrollAnimation>
            <div className={styles.features__card}>
              <div className={styles.features__phone}>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  animateOut="fadeInUp"
                  animateOnce
                >
                  <img
                    src="/assets/seam2.png"
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
                    src="/assets/seam3.png"
                    alt="2 step KYC interface"
                    className={styles.features__image}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className={styles.features__features2}>
        <div className="container">
          <div className={styles.features__content2}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <h2 className={styles.features__title2}>
                a more functional
                <br />
                payment confirmation
                <br />
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.features__text2}>
                <p>
                  The payment confirmation screen became an all-in-one
                  dashboard, giving users instant access to essential details
                  like a downloadable TT copy and a guided KYC walkthrough for
                  NTB users.{" "}
                </p>

                <p>
                  Consolidating key information reduced confusion and user
                  anxiety while streamlining the process.{" "}
                </p>

                <p>
                  This redesign enhanced trust and delivered a seamless,
                  user-centric experience.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.features__mobs}>
                <img
                  src="/assets/payTwin.png"
                  alt="2 step KYC interface"
                  className={styles.features__image}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className={styles.features__features3}>
        <div className="container">
          <div className={styles.features__content3}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <h2 className={styles.features__title3}>From Vision to Launch</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.features__text3}>
                <p>
                  The product's journey to launch was rooted in a phased
                  development approach and a carefully crafted Go-To-Market
                  (GTM) strategy.{" "}
                </p>

                <p>
                  Starting with user research and design validation, we
                  transitioned into iterative development, focusing first on the
                  ETB journey for faster deployment while refining the NTB
                  process in parallel. Each phase included rigorous testing and
                  real-time adjustments to ensure a robust integration with four
                  major banks.{" "}
                </p>

                <p>
                  The GTM strategy emphasised a staggered release, launching
                  with ETB users to build momentum and fine-tuning NTB
                  onboarding post-feedback.{" "}
                </p>

                <p>
                  This methodical approach ensured the product was user-ready,
                  scalable, and aligned with the market’s needs.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
