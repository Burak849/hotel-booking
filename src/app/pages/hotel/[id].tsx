import Link from 'next/link';
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
    description: string;
    rooms: Room[];
};

const HotelDetailsPage = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch(`../../api/hotels`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch hotels: ${response.statusText}`);
                }
                const data: Hotel[] = await response.json();
                setHotels(data);
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching hotels.");
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    if (loading) return <div>Loading hotels...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Available Hotels</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <img
                            src={hotel.imageUrl}
                            alt={hotel.name}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "16px" }}>
                            <h2 style={{ marginBottom: "8px", fontSize: "1.5rem" }}>{hotel.name}</h2>
                            <p style={{ marginBottom: "8px", color: "#555" }}>
                                <strong>Location:</strong> {hotel.location}
                            </p>
                            <p style={{ marginBottom: "8px", color: "#555" }}>
                                <strong>Rating:</strong> {hotel.rating} / 5
                            </p>
                            <p style={{ marginBottom: "16px", color: "#666", fontSize: "0.9rem" }}>
                                {hotel.description.length > 100
                                    ? hotel.description.slice(0, 100) + "..."
                                    : hotel.description}
                            </p>
                            <Link href={`/hotel/${hotel.id}`}>
                                <a
                                    style={{
                                        display: "inline-block",
                                        padding: "10px 16px",
                                        backgroundColor: "#0070f3",
                                        color: "#fff",
                                        textDecoration: "none",
                                        borderRadius: "4px",
                                        textAlign: "center",
                                    }}
                                >
                                    View Details
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelDetailsPage;
