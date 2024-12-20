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
    const { query, push } = useRouter();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query.id) {
            const fetchHotel = async () => {
                try {
                    const response = await fetch(`/api/hotels`);  // API'den otel verisini al
                    if (!response.ok) {
                        throw new Error(`Failed to fetch hotels: ${response.statusText}`);
                    }
                    const data: Hotel[] = await response.json();
                    const selectedHotel = data.find((h) => h.id === parseInt(query.id as string));

                    if (selectedHotel) {
                        setHotel(selectedHotel);
                    } else {
                        setError("Hotel not found.");
                        setTimeout(() => push('/'), 2000); // Hotel bulunamazsa anasayfaya yönlendir
                    }
                } catch (err: any) {
                    setError(err.message || "An error occurred while fetching the hotel.");
                    setTimeout(() => push('/'), 2000); // Hata durumunda anasayfaya yönlendir
                } finally {
                    setLoading(false);
                }
            };

            fetchHotel();
        }
    }, [query.id, push]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error} Redirecting to homepage...</div>;

    if (hotel) {
        return (
            <div>
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
        );
    }

    return <div>Hotel not found.</div>;
};

export default HotelPage;
