import Link from 'next/link';
import React from 'react';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
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
            <button className={styles['button']}>Login</button>
            <button className={styles['button']}>Register</button>
        </nav>
    );
};

export default Navbar;
