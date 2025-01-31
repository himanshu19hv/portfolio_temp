'use client';

import { useEffect, useState } from "react";
import HomePage from "./components/HomePage"
export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  return (
    <main>
     { loading ?
    <div className="video-container">
  <video autoPlay muted loop playsInline>
    <source src="/assets/Loading.mp4" type="video/mp4" />
  </video>
</div>
     :
      <HomePage />}
    </main>
  );
}