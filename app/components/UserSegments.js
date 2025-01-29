'use client';

import Image from '@/node_modules/next/image';
import styles from '../styles/UserSegments.module.scss';
import etb from '../../public/assets/etb.png';
import ntb from '../../public/assets/ntb.png';
const segments = [
  {
    id: 'etb',
    title: 'etb(Existing to bank)',
    description: 'ETB users, already customers of the integrated banks, valued speed and convenience. They expected a seamless experience with pre-filled details, no extra KYC steps, and upfront clarity on rates and fees. For them, the focus was on completing transactions quickly, leveraging the trust and familiarity of their bank’s ecosystem.',
    avatar: etb
  },
  {
    id: 'ntb',
    title: 'ntb(New to bank)',
    description: 'ETB users, already customers of the integrated banks, where integration with their bank accounts was not yet available. They were KYC-ready with valid IDs but lacked ability to connect their bank accounts.',
    avatar: ntb
  }
];

export default function UserSegments() {
  return (
    <section className={styles.segments}>
      <div className="container">
        <h2 className={styles.segments__title}>User Segments and their behaviours</h2>
        <p className={styles.segments__text}>We identified user segments through data analysis, interviews, and behavioral mapping. ETB users valued speed, NTB users needed onboarding support, and a third group—acquired users not linked to specific banks—required a seamless start. This segmentation enabled us to address unique needs effectively.</p>
        <div className={styles.segments__grid}>
          {segments.map((segment) => (
            <div key={segment.id} className={styles.segments__card}>
              <div className={styles.segments__avatar}>
                <Image src={segment.avatar} alt={segment.title} width={130} height={120} layout='responsive'/>
              </div>
              <h3 className={styles.segments__cardTitle}>{segment.title}</h3>
              <p className={styles.segments__description}>{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}