"use client";

import styles from "../styles/AgileChallenge.module.scss";
import { ArrowUpRight } from "lucide-react";
import Image from "@/node_modules/next/image";
import ScrollAnimation from "@/node_modules/react-animate-on-scroll";
import "animate.css/animate.compat.css";
const sprintStages = [
  {
    number: "2",
    title: "Weeks",
    description: "discovery and research",
  },
  {
    number: "3",
    title: "weeks",
    description: "Ideation & Prototyping",
  },
  {
    number: "4",
    title: "Weeks",
    description: "Development and Integration",
  },
  {
    number: "3",
    title: "weeks",
    description: "Testing and Launch",
  },
];

export default function AgileChallenge() {
  return (
    <section className={styles.challenge}>
      <div>
        <Image src={"/assets/agileBG.png"} layout={"fill"} />
      </div>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <h2 className={styles.challenge__title}>
            Defining the challenge with the help of an agile sprint
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <p className={styles.challenge__description}>
            With differing visions for the product and the upcoming forex card,
            we prioritized refining the remittance experience first. I
            collaborated with Vaneet (Tech Lead) and Dinesh (Business Head) to
            plan an Agile sprint.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <p className={styles.challenge__subtext}>
            We outlined clear weekly objectives to tackle bank integrations and
            core development. The sprint focused on addressing key questions and
            aligning stakeholders while centering the user experience.
          </p>
        </ScrollAnimation>
        <div className={styles.challenge__cards}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <div className={styles.challenge__card}>
              <div className={styles.challenge__content}>
                <p>
                  Streamline User Journeys{" "}
                  <span className={styles.challenge__dim}>and</span> Bank
                  Integrations:
                  <span className={styles.challenge__dim}> Design</span>{" "}
                  seamless flows for ETB, NTB,{" "}
                  <span className={styles.challenge__dim}>and</span> acquired
                  users <span className={styles.challenge__dim}>while</span>{" "}
                  ensuring ARPU exceeds CAC{" "}
                  <span className={styles.challenge__dim}>through</span>{" "}
                  efficient and scalable bank integrations.
                </p>
              </div>
              <span className={styles.challenge__number}>01.</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            animateOnce
          >
            <div className={styles.challenge__card}>
              <div className={styles.challenge__content}>
                <p>
                  Prioritise Impactful Features{" "}
                  <span className={styles.challenge__and}>and</span> Business
                  Metrics:
                  <span className={styles.challenge__dim}>
                    {" "}
                    Focus on high-value features like
                  </span>{" "}
                  beneficiary management{" "}
                  <span className={styles.challenge__dim}>and</span> payment
                  transparency,{" "}
                  <span className={styles.challenge__dim}>driving</span> TPV
                  growth, funnel efficiency,{" "}
                  <span className={styles.challenge__dim}>and a</span>{" "}
                  successful phased GTM strategy.
                </p>
              </div>
              <span className={styles.challenge__number}>02.</span>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <p className={styles.challenge__conclusion}>
            With clear goals, we conducted expert interviews and "How Might We"
            sessions to gather diverse insights. Despite early hurdles, the
            Crazy 8x sketching sparked creative solutions, while lightning demos
            showcased practical and aspirational industry practices, shaping our
            strategy.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInUp" animateOnce>
          <div className={styles.challenge__timeline}>
            <Image
              src={"/assets/cards.png"}
              layout={"responsive"}
              width={1000}
              height={100}
            />
          </div>
        </ScrollAnimation>
        {/* <div className={styles.challenge__timeline}>
          {sprintStages.map((stage, index) => (
            <div key={index} className={styles.challenge__stage}>
              <div className={styles.challenge__stageContent}>
                <span className={styles.challenge__stageNumber}>{stage.number}</span>
                <span className={styles.challenge__stageTitle}>{stage.title}</span>
                <p className={styles.challenge__stageDesc}>{stage.description}</p>
              </div>
              <ArrowUpRight className={styles.challenge__arrow} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
