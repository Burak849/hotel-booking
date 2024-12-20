import { useEffect, useState } from "react";
import React from 'react';
import styles from '../style/HotelListPage.module.css';
import styled from 'styled-components';

interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
}

const HotelListPage = () => {
    const [hotels, setHotels] = useState<Hotel[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch('/api/hotels');
                if (!response.ok) throw new Error('API Error');
                const data = await response.json();
                setHotels(data);  
            } catch (error: any) {
                setError('Error fetchingte hata yapildi: ' + error.message);  
                console.error('API Error:', error);  
            }
        };

        fetchHotels();
    }, []);

    if (error) {
        return <div>{error}</div>; 
    }

    if (!hotels) {
        return <div>Loading...</div>; 
    }

    return (
        <main className={styles['listing']}>
            <h1>Hotel List</h1>
            {hotels ? (
                <ul>
                    {hotels.map((hotel) => (
                        <li key={hotel.id}>
                            {hotel.name} - {hotel.location} - {hotel.rating}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default HotelListPage;
