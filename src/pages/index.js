import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </>
  );
}
