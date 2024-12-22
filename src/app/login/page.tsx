"use client";

import { useEffect, useState } from "react";
import React from 'react';
import styled from 'styled-components';
import styles from '../style/Login.module.css';
import Link from 'next/link';

const Login = () => {

    return (<>
        <div className={styles.contwhole}>
        <StyledWrapper>
            <div className={styles.contlogn}>
            <div className="container">
                <div className="heading">Log In</div>
                <form className="form">
                    <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
                    <input required className="input" type="password" name="password" id="password" placeholder="Password" />
                    <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
                    <input className="login-button" type="submit" defaultValue="Login" />
                </form>
                <div className="social-account-container">
                    <span className="title">Or Log in with</span>
                    <div className="social-accounts">
                        <button className="social-button google">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg></button>
                        <button className="social-button apple">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                        </button>
                        <button className="social-button twitter">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className="agreement"><a href="#">Learn user licence agreement</a></span>
            </div>
        </div>
        </StyledWrapper>

            <div className={styles.contsign}>
                <StyledSingup>
                    <div className={styles.signst}>
                        <p style={{fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tortor erat.</p>
                        <Link href="/register">
                        <button className="signupBtn">
                        Sign Up
                        <span className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                        </span>
                            </button>
                        </Link>

                </div>
                </StyledSingup>
            </div>
        </div>

    </>
    );
}
const StyledSingup = styled.div`
  .signupBtn {
    width: 120px;
    height: 40px;
    border-radius: 30px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    gap: 9px;
    color: white;
    background: linear-gradient(to right,rgb(128, 128, 255),rgb(183, 128, 255));
    position: relative;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
  }
  @media (max-width: 480px) {
    .contwhole {
        height:auto;
        padding: 6rem;
    }

    .container {
        padding: 15px;
    }

    .heading {
        font-size: 24px;
    }

    .form .input {
        padding: 10px 12px;
    }

    .form .login-button {
        padding-block: 10px;
        font-size: 14px;
    }

    .signupBtn {
        width: 100px;
        height: 35px;
    }
}
  .arrow {
    position: absolute;
    right: 7.5px;
    background-color: rgb(255, 255, 255);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .signupBtn:hover .arrow {
    animation: slide-in-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }`;
const StyledWrapper = styled.div`

@media (max-width: 1200px) {
    .contwhole {
        flex-direction: column;
        gap: 5rem;
    }

    .contlogn, .contsign {
        height: auto;
        width: 90%;
        margin: 0 auto;
    }

    .signst {
        text-align: center;
        width:auto;
    }
}

@media (max-width: 768px) {
    .container {
        width: 90%;
        padding: 20px;
    }

    .form .input {
        padding: 12px 15px;
    }

    .form .login-button {
        padding-block: 12px;
    }

    .social-button {
        width: 100%;
        margin-top: 10px;
    }
}

@media (max-width: 480px) {
    .contwhole {
        height:auto;
        padding: 6rem;
    }

    .container {
        padding: 15px;
    }

    .heading {
        font-size: 24px;
    }

    .form .input {
        padding: 10px 12px;
    }

    .form .login-button {
        padding-block: 10px;
        font-size: 14px;
    }

    .signupBtn {
        width: 100px;
        height: 35px;
    }
}
  .container {
    width: auto;
    height:auto;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgb(16, 137, 211);
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input::placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }

  .form .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .form .forgot-password a {
    font-size: 11px;
    color: #0099ff;
    text-decoration: none;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
  }

  .social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 9px;
  }`;

export default Login;
