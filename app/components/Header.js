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
            <Link href="/" className={styles.header__link} target={"__parent"}>Work</Link>
            <Link href="https://drive.google.com/file/d/1z9TsNID08aHqPKqkVixIAq-EVV_0xAVh/view?usp=sharing" className={styles.header__link} target={"__blank"}>Resume</Link>
            <Link href="https://left-business-498772.framer.app/About" className={styles.header__link} target={"__blank"}>About</Link>
            <Link href="https://left-business-498772.framer.app/Contact" className={styles.header__link} target={"__blank"}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}