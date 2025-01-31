"use client";

import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (window.innerWidth < 800) {
        setMobile(true);
      }
    }, 1500);
  }, []);
  return (
    <main>
      {!mobile ? (
        loading ? (
          <div className="video-container">
            <video autoPlay muted loop playsInline>
              <source src="/assets/Loading.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <HomePage />
        )
      ) : (
        <div className="mobileScreen">
          <TypeAnimation
            sequence={["view this on desktop for better experience."]}
            wrapper="span"
            speed={70}
            style={{ color: "#00FF00", fontSize: 20 }}
          />{" "}
        </div>
      )}
    </main>
  );
}
