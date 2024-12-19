'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

export default function Home() {
  return (
      <>
          <div className='bg'>
              <Navbar />
              <Hero />
              <h1 style={{ display: 'fixed', position: 'relative', background: 'transparent', justifyContent: 'center', fontSize: '1.5rem', fontFamily: 'cursive' }}>Check out our Hotels!</h1>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
              <br />
          <br/>
              <br />
          </div>
      </>
  );
}




