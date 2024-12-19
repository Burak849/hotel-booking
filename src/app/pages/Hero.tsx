import React from 'react';
import styles from '../style/Hero.module.css';
import styled from 'styled-components';



const Hero = () => {
    return (
        <section className={styles["container"]} >
            <span style={{ display: 'flex', justifyContent: 'center' }}>
                Let's see what expect in our journey!</span><br /><br /><br /><br /><br /><br /><br />
            <div className={styles.banner}>
                <form className={styles.form}>
                    <input type="number" placeholder="Guests" className={styles.input} />
                    <input type="date" placeholder="Departure" className={styles.input} />
                    <input type="date" placeholder="Arrival" className={styles.input} />
                    <input type="date" placeholder="Departure Date" className={styles.input} />
                    <input type="date" placeholder="How long" className={styles.input} />
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} /> Direct Flights
                    </label>
                    <button type="submit" className={styles.button}>Search</button>
                </form>
            </div>
        </section>
    );
};

export default Hero;