"use client";

import styles from "../styles/EnhancedJourney.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function EnhancedJourney() {
  return (
    <section className={styles.journey}>
      <div className="container">
        <div className={styles.journey__section}>
          <div className={styles.journey__content}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <h2 className={styles.journey__title}>
                enhanced journey
                <br />
                for sending money
                <br />
                abroad
              </h2>
              <div className={styles.journey__text}>
                <p>
                  The journey has been tailored in a manner where only the
                  necessary questions are asked from the user as per the choice
                  of the payment method selected in the early stages of the
                  journey.
                </p>

                <p>
                  For instance if the User choses that the payment should be
                  done by ICICI as a bank the beneficiary details will be
                  skipped for the user.
                </p>

                <p>
                  It reduces the TTV (Time to Value and enables the User to make
                  the payment in the least no of clicks)
                </p>
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.journey__phone}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <img
                src="/assets/ej1.png"
                alt="Enhanced remittance journey interface"
                className={styles.journey__image}
              />
            </ScrollAnimation>
          </div>
        </div>

        <div className={styles.journey__section}>
          <div className={styles.journey__phone}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <img
                src="/assets/ej2.png"
                alt="Beneficiary management interface"
                className={styles.journey__image}
                style={{ width: "48%" }}
              />
            </ScrollAnimation>
          </div>

          <div className={styles.journey__content}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <h2 className={styles.journey__title}>
                add beneficiary is easier
                <br />
                than adding contact
                <br />
                now
              </h2>
              <div className={styles.journey__text}>
                <p>
                  Adding a beneficiary—a critical yet often cumbersome step in
                  remittance journeys—was reimagined to be seamless and
                  efficient. With our design, users could add beneficiary
                  details in just a few clicks, leveraging pre-filled data and
                  intuitive prompts.
                </p>

                <p>
                  By validating the user's identity through existing bank
                  integrations, unnecessary steps were eliminated, creating a
                  frictionless flow. This simplification not only reduced the
                  cognitive load but also instilled confidence, as users could
                  complete this step quickly without the usual back-and-forth.
                </p>

                <p>
                  The streamlined journey emphasized clarity and ease, enhancing
                  the overall user experience while saving valuable time.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
