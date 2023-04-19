import About from "@/components/About";
import ContactForm from "@/components/Contacto";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import PlansSection from "@/components/PlanSection";
import { Reviews } from "@/components/Reviews";

import Spinner from "@/components/Spinner";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2400);
  }, [ ]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About/>
          <PlansSection/>
          <Plan/>
          <Reviews/>
          <ContactForm/>
          <Footer/>
        </>
      )}
    </>
  );
}
