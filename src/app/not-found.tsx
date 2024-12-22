"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/hotel");
        }, 5000); 
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='notfoundstyle'>
            <h1>Oops 404 - Page Not Found</h1>
            <p>
                You are redirecting to <a href="/hotel">"Hotel Lists"</a> page in 5sec..
            </p>
        </div>
    );
};

export default NotFound;
