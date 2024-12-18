import { useEffect, useState } from 'react';
import Link from 'next/link';

type Hotel = {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
};

const Home = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        fetch('/api/hotels')
            .then((response) => response.json())
            .then((data) => setHotels(data));
    }, []);

    return (
        <div>
            <h1>Otel Listesi</h1>
            <div>
                {hotels.map((hotel) => (
                    <div key={hotel.id}>
                        <Link href={`/hotel/${hotel.id}`}>
                            <a>
                                <img src={hotel.imageUrl} alt={hotel.name} />
                                <h2>{hotel.name}</h2>
                                <p>{hotel.location}</p>
                                <p>Rating: {hotel.rating}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
