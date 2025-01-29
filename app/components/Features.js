"use client";

import styles from "../styles/Features.module.scss";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
const features = [
  {
    number: "01.",
    title: "lack of <br/> transparency.",
    description:
      "Users often struggled with hidden fees, unclear exchange rates, and long processing times. We focused on providing complete upfront visibility into the total cost of transactions.",
  },
  {
    number: "02.",
    title: "complex and repetitive processes.",
    description:
      "The traditional bank process was riddled with redundant KYC procedures and repetitive data entry. We streamlined these workflows into a single, efficient journey.",
  },
  {
    number: "03.",
    title: "uncertainty and lack of control.",
    description:
      "Users expressed dissatisfaction regarding the status of their transactions and the inability to track progress. We implemented real-time tracking and status updates.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <h2 className={styles.features__title}>
            Uncovering Gaps in the Forex Remittance Market
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <p className={styles.features__subtitle}>
            We explored the problem space by conducting qualitative research
            with ETB and NTB users, competitive benchmarking, and analyzing
            support queries. Patterns revealed frustrations with non-transparent
            fees, repetitive KYC processes, and a lack of trust due to poor
            transaction tracking, helping us prioritize the core issues to
            address.
          </p>
        </ScrollAnimation>
        <div className={styles.features__grid}>
          {features.map((feature) => (
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              animateOnce
            >
              <div key={feature.number} className={styles.features__card}>
                <h3
                  className={styles.features__cardTitle}
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
                <p className={styles.features__description}>
                  {feature.description}
                </p>
                <span className={styles.features__number}>
                  {feature.number}
                </span>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
