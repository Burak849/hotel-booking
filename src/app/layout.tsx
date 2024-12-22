'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement[]>([]);
    const trailLength = 10;
    const [positions, setPositions] = useState<{ x: number; y: number }[]>(
        Array(trailLength).fill({ x: 10, y: 10 })
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            setPositions((prevPositions) => {
                const newPositions = [{ x, y }, ...prevPositions.slice(0, trailLength - 5)];
                return newPositions;
            });

            if (cursorRef.current) {
                cursorRef.current.style.opacity = "1";
                cursorRef.current.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "0";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleHover = (index: number) => {
        const trailElement = trailRef.current[index];
        if (trailElement) {
            trailElement.style.stroke = "#ffffff";
            trailElement.style.strokeWidth = "12";
        }
    };

    const handleMouseOut = (index: number) => {
        const trailElement = trailRef.current[index];
        if (trailElement) {
            trailElement.style.stroke = "#ffea00";
            trailElement.style.strokeWidth = "10";
        }
    };



  return (
      <html lang="en">
          <body>
              <div className='bg'>

              <Navbar />
              {children}
              <Footer />
              </div>


              <svg
                  style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      pointerEvents: "none",
                      zIndex: 0,
                      width: "100%",
                      height: "100%",

                  }}
              >
                  {positions.slice(1).map((pos, index) => (
                      <line
                          key={index}
                          x1={positions[index].x}
                          y1={positions[index].y}
                          x2={pos.x}
                          y2={pos.y}
                          stroke="yellow"
                          strokeWidth="10"
                          strokeOpacity={1}
                          strokeLinecap="round"
                          onMouseEnter={() => handleHover(index)}
                          onMouseLeave={() => handleMouseOut(index)}
                          style={{
                              filter: "drop-shadow(0px 0px 1px white)",
                          }}
                      />
                  ))}
              </svg>


          </body>
    </html>
  );
}
