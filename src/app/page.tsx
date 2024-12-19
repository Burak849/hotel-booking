'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

export default function Home() {
  return (
      <>
          <div className='bg'>
              <Navbar />
              <Hero />
              <Footer/>
          </div>
      </>
  );
}




