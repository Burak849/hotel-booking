import React from 'react';
import styles from '../style/Hero.module.css';
import styled from 'styled-components';



const Hero = () => {
    return (<>
        <section className={styles["container"]} >
            <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem', color: 'white' }}>
                Let's see what expect in our journey!</h1><br /><br /><br /><br /><br /><br /><br />
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
        <section className={styles['informations']}>
            <h1>Check out our Hotels!</h1>
            <p style={{padding: '2rem'} }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
            </p>
            
            <StyledWrapper>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4.5rem', position: 'relative' }}>
                <div className="card">
                        <img src="/media/cork.jpg" className="card__image" alt="Cork" />
                        <div className="card__content" style={{ content:'24,50$' }}>
                            <span className="title">Cork</span>
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>

                    </div>
                </div>
                    <div className="card">
                        <img src="/media/dublin.jpg" className="card__image" alt="Dublin" />
                    <div className="card__content">
                            <span className="title">Dublin</span>
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width:'9em' }}>Details</button>

                    </div>
                    </div>
                    <div className="card">
                        <img src="/media/galway.jpg" className="card__image" alt="Galway" />
                        <div className="card__content">
                            <span className="title">Galway</span>
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>

                        </div>
                    </div>

            </div>
            </StyledWrapper>


        </section>
    </>
    );

}
const StyledWrapper = styled.div`
  .card {
    width: 20rem;
    height: 25rem;
    background: #ffd166;
    color: #073b4c;
    font-weight: 600;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
    transition: all .5s ease;
    border-radius:2%;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.4);
  }

  .card::before {
    content: "31,99$";
    position: absolute;
    width: 5.5rem;
    height: 5rem;
    top: 60%;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ef476f;
    color: aliceblue;
    font-weight: 500;
    transition: all .5s ease;
  }

  .card__image {
    width: initial;
    height: 15rem;
    background: rgb(6,214,160);
    background: linear-gradient(163deg, #06d6a0 18%, rgba(17,138,178,1) 79%);
    transition: all .5s ease;
  }

  .title {
    font-weight: 800;
    font-size: 1.2em;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    gap: 10px;
  }

  .card:hover {
    border-top-left-radius: 35px;
    box-shadow: 5px 5px 0px 0px #06d6a0, 10px 10px 0px 0px #118ab2, 15px 15px 0px 0px #06d6a0, 5px 5px 15px 5px rgba(0,0,0,0);
  }

  .card:hover .card__image {
    border-top-left-radius: 25px;
  }

  .card:hover::before {
    transform: scale(1.3) rotate(-30deg);
  }`;

export default Hero;