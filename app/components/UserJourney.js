"use client";

import styles from "../styles/UserJourney.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function UserJourney() {
  const Cards = [
    "/assets/Card1.png",
    "/assets/Card2.png",
    "/assets/Card3.png",
    "/assets/Card4.png",
    "/assets/Card5.png",
    "/assets/Card6.png",
  ];
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
              user journey in the
              <br />
              finance flow
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
                  src="/assets/userJContent.png"
                  alt="2 step KYC interface"
                  className={styles.features__image}
                />
              </div>
            </ScrollAnimation>
          </div>
          <div></div>
        </div>
      </section>
      <section className={styles.features2}>
        <div className="container">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <h2 className={styles.features2__title2}>
              What happens once
              <br />
              taken Live?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <div className={styles.features2__text2}>
              <p>
                Post launch we anticipated a notable response in our revenue
                channel addition from a singular channel of orders (B2B). The
                initial contribution margin (CM2) of the B2C channel increased
                by 14% MOM for the last Quarters.
              </p>
              <p>
                With the ability to provide a seamless experience in the
                remittance market we gained huge traction in the new user sign
                ups increased by a massive 43%.
              </p>
              <p>
                With B2C experience in place we were able to establish ourself
                in the big world of Fintechs and were already a name in the
                remittance market. The results stunned us and below are the
                numbers we were able to achieve.
              </p>
            </div>
          </ScrollAnimation>
          <div className={styles.features2__grid}>
            {Cards.map((cc, ind) => {
              return (
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInUp"
                  animateOnce
                >
                  <div className={styles.features2__card}>
                    <div className={styles.features2__phone}>
                      <img
                        src={cc}
                        alt="cards"
                        className={styles.features2__image}
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
