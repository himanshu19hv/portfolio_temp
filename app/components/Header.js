'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.header__scrolled : ''}`}>
      <div className="container">
        <nav className={styles.header__nav}>
          <Link href="/" className={styles.header__logo}>
            ut.
          </Link>

          <div className={styles.header__links}>
            <Link href="/" className={styles.header__link}>Work</Link>
            <Link href="/" className={styles.header__link}>Resume</Link>
            <Link href="/" className={styles.header__link}>About</Link>
            <Link href="/" className={styles.header__link}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}