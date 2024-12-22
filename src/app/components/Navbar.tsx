import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <Link href="/" className={`${styles.link} ${styles['home-link']}`}>
                <div>Home</div>
            </Link>
            <Link href="/hotel" className={styles.link}>
                <div>Hotel Lists</div>
            </Link>
            <Link href="/about" className={styles.link}>
                <div>About us</div>
            </Link>
            <Link href="#footer" className={styles.link}>
                <div>Contact</div>
            </Link>
            <Link href="/login" className={styles.link}>
                <button className={styles['button']}>Login</button>
            </Link>
            <Link href="/register" className={styles.link}>
                <button className={styles['button']}>Register</button>
            </Link>

        </nav>
    );
};

export default Navbar;
