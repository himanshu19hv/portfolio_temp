'use client';

import Image from '@/node_modules/next/image';
import styles from '../styles/ConceptsChaos.module.scss';

export default function ConceptsChaos() {
  return (
    <section className={styles.concepts}>
       <div>
      <Image src={'/assets/chaosBG.png'} layout={'fill'}/>
      </div>
      <div className="container">
        <h2 className={styles.concepts__title}>
          Crafting concepts from chaos
        </h2>
        <p className={styles.concepts__description}>
          After we were done with our high-level user observations and pain points, we began our ideate, prototype and refine. From User flows to UI concepts, we explored a spectrum of possibilities. By the end of the week, we distilled our efforts into a handful of promising concepts - those that were feasible, useable and impactful.
        </p>
        <p className={styles.concepts__subtitle}>
          Our goal was clear: pursue novelty and explore extensively.
        </p>

        <div className={styles.concepts__grid}>
          <div className={styles.concepts__item}>
          <div  style={{width: 600, height: 450}}>
            <Image 
              src="/assets/step1.png" 
              alt="Understanding constraints with partner banks"
              className={styles.concepts__image}
              layout={'responsive'}
              width={100}
              height={100}
            />
            </div>
            <span>step 1</span>
            <p className={styles.concepts__caption}>
              Understanding of what are the constraints with the partner banks with their respective API flows
            </p>
          </div>

          <div className={styles.concepts__item}>
          <div  style={{height: 285}}>
          <Image 
              src="/assets/step2.png" 
              alt="Understanding constraints with partner banks"
              className={styles.concepts__image}
              layout={'responsive'}
              width={100}
              height={100}
            />
            </div>
            <span>step 2</span>
            <p className={styles.concepts__caption}>
              High level journey with the execution details and what would be expected with respective banks and the constraints.
            </p>
          </div>

          <div className={styles.concepts__item} >
            <div  style={{width: 322, height: 697}}>
          <Image 
              src="/assets/step3.png" 
              alt="Understanding constraints with partner banks"
              className={styles.concepts__image}
              layout={'responsive'}
              width={393}
              height={695}
             
            />
            </div>
          <span>step 3</span>
            <p className={styles.concepts__caption}>
              Once the high level journey was done, it was refined to ensure how the user flow looks like first goes up is clear idea of the operating good cases.
            </p>
          </div>

          <div className={styles.concepts__sketches}>
            <div className={styles.concepts__sketch}>
              <div style={{width: 470,height: 705 }}>
            <Image 
              src="/assets/step4.png" 
              alt="Understanding constraints with partner banks"
              className={styles.concepts__image}
              layout={'responsive'}
              width={100}
              height={100}
            />
            </div>
              <span className={styles.concepts__sketchLabel}>step 4(a)</span>
              <p className={styles.concepts__sketchCaption}>
              Once the user flow was cemented the next steps were to diverge and see if the journey would break anywhere along with the understanding of which flows would amount to a less TTV(Time to Value).
              </p>
            </div>

            <div className={styles.concepts__sketch}>
            <div style={{width: 485 ,height: 705 }}>
            <Image 
              src="/assets/step5.png" 
              alt="Understanding constraints with partner banks"
              className={styles.concepts__image}
              layout={'responsive'}
              width={100}
              height={100}
            />
            </div>
              <span className={styles.concepts__sketchLabel}>step 4(b)</span>
              <p className={styles.concepts__sketchCaption}>
              Post Lo-Fi testing tweaked the flow a bit and checked if the updated screens impacted the TTV along with no of clicks it would take for a user to complete the task. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}