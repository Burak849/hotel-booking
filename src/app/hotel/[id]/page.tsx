"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

const HotelPage = () => {
    const { id } = useParams(); 
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (hotel) {
        return (<>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20rem', alignItems: 'center', gap:'1rem' }}>
                <h1>{hotel.name}</h1>
                <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
                />
                <p><strong>Location:</strong> {hotel.location}</p>
                <p><strong>Rating:</strong> {hotel.rating} / 5</p>
                <p><strong>Travel Dates:</strong> {hotel.datesOfTravel.join(" to ")}</p>
                <p><strong>Board Basis:</strong> {hotel.boardBasis}</p>

                <h2>Available Rooms</h2>
                <ul>
                    {hotel.rooms.map((room, index) => (
                        <li key={index}>
                            <strong>{room.roomType}:</strong> {room.amount} rooms available
                        </li>
                    ))}
                </ul>
            </div>
            </>
        );
    }

    return <div>Hotel not found.</div>;
};

export default HotelPage;
