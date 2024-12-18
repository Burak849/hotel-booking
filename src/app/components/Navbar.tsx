import React from 'react';
import styles from '../style/Navbar.module.css'; 
import styled from 'styled-components';


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={`${styles.link} ${styles['home-link']}`} href="#home">
                
                <div>
                    Home
                </div>
                
            </a>
            <a className={styles.link} href="#about-me">
                
                <div>
                    Hotel Lists
                </div>
                
            </a>
            <a className={styles.link} href="#skills">
                
                <div>
                    About us
                </div>
                
            </a>
            <a className={styles.link} href="#projects">
                
                <div>
                    Contact
                </div>
               
            </a>
            <button className={styles['button']}>Login</button>
            <button className={styles['button']}>Register</button>
        </nav>
    );
};

export default Navbar;