"use client";

import { useEffect, useState } from "react";
import React from "react";
import styles from "../style/HotelListPage.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";


type Room = {
    roomType: string;
    amount: number;
};
interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
    datesOfTravel: string[];
    boardBasis: string;
    rooms: Room[];
}

const HotelListPage = () => {
    const [hotels, setHotels] = useState<Hotel[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch("/api/hotels");
                if (!response.ok) throw new Error("API Error");
                const data = await response.json();
                setHotels(data);
            } catch (error: any) {
                setError("Error fetchingte hata yapildi: " + error.message);
                console.error("API Error:", error);
            }
        };

        fetchHotels();
    }, []);

    const handleViewClick = (hotelId: number) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.location.href = `/hotel/${hotelId}`;
        }, 5000);
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!hotels) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className={styles["listing"]}>
                <h1 className={styles.hlp1}>Hotel Lists</h1>

                {loading && (
                    <LoadingOverlay>
                        <div className={styles['loading-bar']}></div>
                    </LoadingOverlay>
                )}
                <StyledWrapper>
                    <ul className={styles["DetailList"]}>
                        {hotels.map((hotel) => (
                            <li key={hotel.id}>
                                <article className="card">
                                    <section className="card__hero">
                                        <p className="card__job-title">{hotel.name}</p>
                                        <img src={hotel.imageUrl} className="image"/>
                                    </section>
                                    <div className="card__footer">
                                        <div className="card__job-summary">
                                            <div className="card__job-icon">
                                                <svg
                                                    height={35}
                                                    width={28}
                                                    viewBox="0 0 250 250"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="#4285F4"
                                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                                    />
                                                    <path
                                                        fill="#34A853"
                                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                                    />
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                                    />
                                                    <path
                                                        fill="#EB4335"
                                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="card__job">
                                                <p className="card__job-title">
                                                    {hotel.location}
                                                    <br />
                                                    {hotel.rating}
                                                </p>
                                            </div>
                                        </div>
                                        <p><strong>Travel Dates:</strong> {hotel.datesOfTravel.join(" to ")}</p>
                                        <p><strong>Board Basis:</strong> {hotel.boardBasis}</p>
                                        <div className={styles.board4s }>
                                            <h2>Available Rooms</h2>
                                            <ul className="ul2">
                                            {hotel.rooms.map((room, index) => (
                                                <li key={index}>
                                                    <strong>{room.roomType}:</strong> {room.amount} rooms available
                                                </li>

                                            ))}
                                        </ul>
                                        </div>
                                        <button
                                            className="card__btn"
                                            onClick={() => handleViewClick(hotel.id)}
                                            disabled={isFetching}
                                        >
                                            View
                                        </button>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </StyledWrapper>
            </div>
        </main>
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
.ul2{
    display: flex;
    gap: 1rem;
}
  .card {
    width: auto;
    height:auto;
    background-color: #fef4e0;
    border-radius: 1.2rem;
    padding: 0.5rem;
    color: #141417;
  }
  .card__hero {
    position:relative;
    width:100%;
    height:30vh;
    overflow:hidden;
    font-size: 0.875rem;
  }
  .card__hero .card__job-title {
    position:absolute;
    bottom:0%;
    left:50%;
    transform: translate(-50%, -50%);
    color: #e1b35c;
    font-size: 1.6rem;
    font-weight: 600;
    z-index:2;
  }
  .card__hero-header {
    display: flex;
    justify-content: flex-end;
    font-weight: 800;
    margin-right:2rem;
  }
  .card__footer {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0.75rem;
    row-gap: 1rem;
    font-weight: 700;
    font-size: 0.875rem;
  }
  @media (min-width: 480px) {
    .card__footer {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  .card__job-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
  }
  .card__btn {
    width: 100%;
    font-weight: 400;
    border: none;
    display: block;
    cursor: pointer;
    text-align: center;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
    background-color: #141417;
    color: #fff;
    font-size: 1rem;
  }
  .card__btn:hover {
  background: #315cfd;
  color: white;
  font-size: 1rem;
}
  .image{
      height:100%;
      width:100%;
      object-fit:cover;
      position:absolute;
      z-index:1;
          border-radius: 1.2rem;
  }
  @media (min-width: 340px) {
    .card__btn {
      width: max-content;
    }
  }`;

export default HotelListPage;
