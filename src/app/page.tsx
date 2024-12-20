'use client';


import React from 'react';
import styles from './style/Home.module.css';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useNavigate } from 'react-router-dom';
import Link from "next/link";


const Home = () => {


    return (<>
        <section className={styles["container"]} >
            <h1 style={{ display: 'flex', fontWeight: 800, fontFamily:'Blue Sans, Roboto, Helvetica, Arial, sans-serif', justifyContent: 'center', fontSize: 48, color: 'white', marginTop: '15rem' }}>
                Traveling in comfort, like never before.</h1><br /><br /><br /><br /><br /><br /><br />
            <div className={styles.banner}>
                <form className={styles.form}>

                    <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <label className={styles.label}>Guests</label>
                    <input type="number" placeholder="Guests" className={styles.input} />
                    </div>
                    <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <label className={styles.label}>Destination</label>
                    <input type="text" placeholder="City" className={styles.input} />
                    </div>
                    <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <label className={styles.label}>Departure Location</label>
                    <input type="text" placeholder="City" className={styles.input} />
                    </div>
                    <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <label className={styles.label}>Departure Date</label>
                    <input type="date" placeholder="Date" className={styles.input} />
                    </div>
                    <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <label className={styles.label}>Return Date</label>
                    <input type="date" placeholder="Date" className={styles.input} />
                        </div>

                    <StyledWrapper>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                        <div className="checkbox-wrapper-46">
                            <input type="checkbox" id="cbx-46" className="inp-cbx" />
                            <label htmlFor="cbx-46" className="cbx"><span>
                                <svg viewBox="0 0 12 10" height="10px" width="12px">
                                    <polyline points="1.5 6 4.5 9 10.5 1" /></svg></span><span style={{ fontSize: '0.9rem', color: 'white', display: 'flex', alignItems: 'center' }}>Direct Flights</span>
                            </label>
                        </div>
                        </div>
                    </StyledWrapper>
                    <Link href="/hotel">
                        <button type="submit" className={styles.button}>Search</button>
                    </Link>

                </form>
            </div>

        </section>
        <section className={styles['informations']}>
            <h1>Popular Travel Spots</h1>
            <p style={{ padding: '2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.
            </p>

            <StyledWrapper>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4.5rem', position: 'relative' }}>
                    <div className="card card-cork">
                        <img src="/media/cork.jpg" className="card__image" alt="Cork" />
                        <div className="card__content">
                            <span className="title">Cork</span>

                            <Link href="/hotel">
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                            </Link>

                        </div>
                    </div>
                    <div className="card card-dublin">
                        <img src="/media/dublin.jpg" className="card__image" alt="Dublin" />
                        <div className="card__content">
                            <span className="title">Dublin</span>
                            <Link href="/hotel">
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card card-galway">
                        <img src="/media/galway.jpg" className="card__image" alt="Galway" />
                        <div className="card__content">
                            <span className="title">Galway</span>
                            <Link href="/hotel">
                            <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card card-paris">
                        <img src="/media/paris.jpg" className="card__image" alt="Galway" />
                        <div className="card__content">
                            <span className="title">Paris</span>
                            <Link href="/hotel">
                                <button type="submit" className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </StyledWrapper>


        </section>
    </>
    );

}
const StyledWrapper = styled.div`
.card-paris::before {
  content: "$79.99";
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
  transition: all 0.5s ease;
}

.card-cork::before {
  content: "$49.99";
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
  transition: all 0.5s ease;
}

.card-galway::before {
  content: "$32.50";
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
  transition: all 0.5s ease;
}


.checkbox-wrapper-46 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  .checkbox-wrapper-46 .cbx {
    margin: auto;
    display:flex;
    gap:0.5rem;
    align-items:center;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .checkbox-wrapper-46 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-46 .cbx span:first-child {
    position: relative;
    width: 20px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 2px solid #9098a9;
    transition: all 0.2s ease;
  }
  .checkbox-wrapper-46 .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-46 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506eec;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  
  .checkbox-wrapper-46 .cbx:hover span:first-child {
    border-color: #506eec;
  }

  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
    background: #506eec;
    border-color: #506eec;
    animation: wave-46 0.4s ease;
  }
  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }

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

  .card-dublin::before {
  content: "$29.99";
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
  transition: all 0.5s ease;
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

export default Home;