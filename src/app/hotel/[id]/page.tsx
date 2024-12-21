"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { url } from 'inspector';
import styles from "../../style/About.module.css";

type Room = {
    roomType: string;
    amount: number;
};

type Hotel = {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
    datesOfTravel: string[];
    boardBasis: string;
    rooms: Room[];
};

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 >= 0.5;  
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`}>&#9733;</span> 
            ))}
            {halfStar && <span>&#9734;</span>} 
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`}>&#9734;</span> 
            ))}
        </>
    );
};



const HotelPage = () => {
    const { id } = useParams(); 
    const router = useRouter();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return; 

        const fetchHotel = async () => {
            try {
                const response = await fetch(`/api/hotels`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch hotels: ${response.statusText}`);
                }
                const data: Hotel[] = await response.json();
                const selectedHotel = data.find((h) => h.id === parseInt(id));

                if (selectedHotel) {
                    setHotel(selectedHotel);
                } else {
                    setError("Hotel not found.");
                }
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching the hotel.");
            } finally {
                setLoading(false);
            }
        };

        fetchHotel();
    }, [id]);

    useEffect(() => {
        if (error) {
            router.replace("/not-found");
            const timeout = setTimeout(() => {
                router.push('/hotel'); 
            }, 5000);

            return () => clearTimeout(timeout); 
        }
    }, [error, router]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (hotel) {
        return (<>

            <div className={styles['detailsbg'] }>
            <StyledWrapper>
                    <div className="card">

                        <article className="artic">
                            <img src={hotel.imageUrl} alt={hotel.name}/>
                        </article>

                        <aside className="card-content">
                            <div className="category">{hotel.name}</div>
                                <div className="heading">
                                {hotel.location} 
                                <div className="rating">
                                    {renderStars(hotel.rating)} ({hotel.rating}/5)
                                </div>
                                    <div className="author">{hotel.datesOfTravel.join(" to ")} {hotel.boardBasis}</div>
                                    <h2>Available Rooms</h2>
                                     <ul>
                                            {hotel.rooms.map((room, index) => (
                                                <li key={index}>
                                                    <strong>{room.roomType}:</strong> {room.amount} rooms available
                                                </li>
                                            ))}
                                     </ul>
                                </div>
                        </aside>

                        <footer className="footer">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in varius nisi. Etiam a hendrerit magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tellus felis, dignissim at eros quis, malesuada luctus arcu. Integer nec nisl ante. Sed maximus tincidunt elit, ut tempus odio varius at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices orci in urna gravida aliquam. Quisque mattis mauris erat, non scelerisque libero laoreet ut. Donec convallis sodales dui ut dapibus. Morbi nunc sem, facilisis ac condimentum sollicitudin, fringilla a ipsum.</p>
                            <button className="btn">Rent</button>
                        </footer>

                </div>
                        
            </StyledWrapper>

            </div>
            </>
        );
    }

    return <div>Hotel not found.</div>;
};

const StyledWrapper = styled.div`

.rating {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.5rem;
    color: #e5e7eb;
}

.rating span {
    color: gold;
}


.artic{
    width:100%;
    max-width:65vh;
    margin-right:2rem;
    height:auto;
    border-radius:12px;
}
.btn {
    width: 25vh;;
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
  .btn:hover {
  background: green;
  color: white;
  font-size: 1rem;
}
  .card {
    display: flex;
    align-items: center;
    width: 100vh;
    height:auto;
    background: white;
    padding: 0.8em;
    gap:0.3rem;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 1);
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content:center;
  }
  .footer{
      display:flex;
      color:black;
      align-items: center;
      flex-direction: column;
  }
  .card-image {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 150px;
    border-radius: 6px;
    flex-shrink: 0;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .card-image:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .category {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(63, 121, 230);
    margin-bottom: 3rem;
    text-align: left; 
  }

  .category:hover {
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    text-align: left; 
    display:flex;
    gap:1.2rem;
    flex-direction:column;
  }

  .heading:hover {
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    text-align: left; /* Align text to the left */
  }

  .name {
    font-weight: 600;
  }

  .name:hover {
    cursor: pointer;
  }

  
  `;

export default HotelPage;
