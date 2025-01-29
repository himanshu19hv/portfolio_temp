"use client";

import Image from "@/node_modules/next/image";
import styles from "../styles/FreshWay.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function FreshWay() {
  return (
    <>
      <section className={styles.freshWay}>
        <div>
          <Image src={"/assets/presenting.png"} layout={"fill"} />
        </div>
        <div className="container">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <span className={styles.freshWay__tag}>presenting</span>

            <h2 className={styles.freshWay__title}>
              A Fresh way to Send
              <br />
              Money Abroad
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
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
                    <h3>
                      a homepage
                      <br />
                      designed for you
                    </h3>
                    <p>
                      Stay proactive in saving the send rates and completing it
                      to get the
                      <br /> desired remittance amount
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <div className={styles.freshWay__grid}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.freshWay__phone}>
                <img
                  src="/assets/presenting2.png"
                  alt="Homepage interface"
                  // className={styles.freshWay__image}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div className={styles.freshWay__phone}>
                <img
                  src="/assets/presenting3.png"
                  alt="Homepage interface"
                  // className={styles.freshWay__image}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className={styles.freshWay__remittance}>
        <div className="container">
        <ScrollAnimation animateIn='fadeInUp' animateOut='fadeInUp' animateOnce>
          <h2 className={styles.freshWay__subtitle}>
            Remittances tailored
            <br />
            for everyone
          </h2>
          </ScrollAnimation>

          <div className={styles.freshWay__types}>
            <div className={styles.freshWay__type}>
              <ScrollAnimation animateIn='fadeInUp' animateOut='fadeInUp' animateOnce>
              <div className={styles.freshWay__content}>
                <h3>
                  for the one's that don't
                  <br />
                  have an existing account
                  <br />
                  with the bank
                </h3>
                <p>
                  For the users who did not have an existing account with the
                  bank can mow split the payments as in pay 5% and the rest
                  could be paid offline or online via RTGS and avail a Physical
                  KYC escaping the digital hassle and pay directly in the branch
                  and the status will be updated on the platform.
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInDown' animateOut='fadeInUp' animateOnce>
              <div className={styles.freshWay__phone}>
                <img
                  src="/assets/tailored1.png"
                  alt="Non-existing account interface"
                  className={styles.freshWay__imageT}
                />
              </div>
              </ScrollAnimation>
            </div>

            <div className={styles.freshWay__type}>
            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeInUp' animateOnce>
              <div className={styles.freshWay__phone}>
                <img
                  src="/assets/tailored2.png"
                  alt="Existing account interface"
                  className={styles.freshWay__imageT}
                />
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' animateOut='fadeInUp' animateOnce>
              <div className={styles.freshWay__content}>
                <h3 style={{ textAlign: "end" }}>
                  for the one's that have an
                  <br />
                  existing bank account
                  <br />
                  with the bank
                </h3>
                <p style={{ textAlign: "end" }}>
                  The cohort of users who were smart and could find their
                  account in the banks do not need a KYC, they can avail all the
                  services without getting in the hassle of KYC and simply
                  process the payment. Even if they choose to go with another
                  bank the KYC is just 2 clicks to validation.
                </p>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
