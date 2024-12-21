'use client';

import { useEffect, useState } from "react";
import React from 'react';
import styles from './style/Home.module.css';
import styled from 'styled-components';
import style from "./style/HotelListPage.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';


const Home = () => {

    const [loading, setLoading] = useState(false); 

    const handleDetailsClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.location.href = `/hotel`;
        }, 3000);

    };

    return (<>

        {loading && (
            <LoadingOverlay>
                <div className={styles['loading-bar']}></div>
            </LoadingOverlay>
        )}
    
        <section className={styles["container"]} >
            <div className={styles.h1}>
                <h1>Traveling in comfort, like never before.</h1>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <div className={styles.banner}>
                <form className={styles.form}>

                    <div className={styles.bannerForm}>
                        <label className={styles.label}>Guests</label>
                        <input type="number" placeholder="Guests" className={styles.input} />
                    </div>
                    <div className={styles.bannerForm}>
                        <label className={styles.label}>Destination</label>
                        <input type="text" placeholder="City" className={styles.input} />
                    </div>
                    <div className={styles.bannerForm}>
                        <label className={styles.label}>Departure Location</label>
                        <input type="text" placeholder="City" className={styles.input} />
                    </div>
                    <div className={styles.bannerForm}>
                        <label className={styles.label}>Departure Date</label>
                        <input type="date" placeholder="Date" className={styles.input} />
                    </div>
                    <div className={styles.bannerForm}>
                        <label className={styles.label}>Return Date</label>
                        <input type="date" placeholder="Date" className={styles.input} />
                    </div>

                    <StyledWrapper>
                        <div className={styles.bannerForm}>

                            <div className="checkbox-wrapper-46">
                                <input type="checkbox" id="cbx-46" className="inp-cbx" />
                                <label htmlFor="cbx-46" className="cbx"><span>
                                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                                        <polyline points="1.5 6 4.5 9 10.5 1" /></svg></span><span className={styles.spanStyle}>Direct Flights</span>
                                </label>
                            </div>
                        </div>

                    </StyledWrapper>

                    <button type="button" className={styles.button}>Search</button>
                    

                </form>

            </div>

            <br /><br /><br />


            <StyledWrapper>
                <button className="button">
                    Start Now
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                    </svg>
                </button>
            </StyledWrapper>

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
                <div className={styles.cardButtons}>
                    <div className="card card-cork">
                        <img src="/media/cork.jpg" className="card__image" alt="Cork" />
                        <div className="card__content">
                            <span className="title">Cork</span>

                            
                            <button type="submit" onClick={handleDetailsClick} className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }}>Details</button>
                            

                        </div>
                    </div>
                    <div className="card card-dublin">
                        <img src="/media/dublin.jpg" className="card__image" alt="Dublin" />
                        <div className="card__content">
                            <span className="title">Dublin</span>
                            
                            <button type="submit" onClick={handleDetailsClick} className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                           
                        </div>
                    </div>
                    <div className="card card-galway">
                        <img src="/media/galway.jpg" className="card__image" alt="Galway" />
                        <div className="card__content">
                            <span className="title">Galway</span>
                            
                            <button type="submit" onClick={handleDetailsClick} className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                         
                        </div>
                    </div>
                    <div className="card card-paris">
                        <img src="/media/paris.jpg" className="card__image" alt="Galway" />
                        <div className="card__content">
                            <span className="title">Paris</span>
                            
                            <button type="submit" onClick={handleDetailsClick} className={styles.button} style={{ fontSize: 15, padding: '.5em 2em', width: '9em' }} >Details</button>
                            
                        </div>
                    </div>
                </div>
            </StyledWrapper>


        </section>
    </>
    );

};
const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
const StyledWrapper = styled.div`
.button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgb(0 107 179);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
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
    max-width:100%;
    max-height:100%;
    object-fit:contain;
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