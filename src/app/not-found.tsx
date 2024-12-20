"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/hotel");
        }, 5000); 
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{ textAlign: "center", padding: "20vh", fontSize: 50 }}>
            <h1>404 - Page Not Found</h1>
            <p>
                You are redicting to <a href="/hotel">"Hotels"</a> page in 5sec..
            </p>
        </div>
    );
};

export default NotFound;
