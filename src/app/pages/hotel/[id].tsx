import { useRouter } from 'next/router';
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
    const { query } = useRouter();
    const [hotel, setHotel] = useState<Hotel | null>(null);

    useEffect(() => {
        if (query.id) {
            fetch(`/api/hotels`)
                .then((response) => response.json())
                .then((data) => {
                    const selectedHotel = data.find((h: Hotel) => h.id === parseInt(query.id as string));
                    setHotel(selectedHotel || null);
                });
        }
    }, [query.id]);

    if (!hotel) return <div>Loading...</div>;

    return (
        <div>
            <h1>{hotel.name}</h1>
            <img src={hotel.imageUrl} alt={hotel.name} />
            <p>{hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Travel Dates: {hotel.datesOfTravel.join(' to ')}</p>
            <p>Board Basis: {hotel.boardBasis}</p>

            <h2>Rooms</h2>
            <ul>
                {hotel.rooms.map((room, index) => (
                    <li key={index}>
                        {room.roomType} - {room.amount} rooms available
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelPage;
