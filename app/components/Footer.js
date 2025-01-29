'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <p className={styles.footer__tagline}>
            © Utkarsh Raj, 2023
            </p>
          </div>

          <div className={styles.footer__links}>
            <div className={styles.footer__group}>
              <Link href="/">Medium</Link>
              <Link href="/">Behance</Link>
              <Link href="/">Dribble</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}