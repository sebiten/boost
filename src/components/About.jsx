import React from "react";
import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
    <div className="flex flex-wrap mx-auto">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="/rock2.png"
            width={400}
            height={400}
            alt="About Us"
            className="transition duration-500 ease-in-out transform hover:scale-105 w-full mx-auto my-auto"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/3 mx-auto my-auto  pl-0  flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About Us
          <BsFillRocketTakeoffFill
            className="inline-block text-4xl text-gray-800"
            style={{ marginLeft: "1rem" }}
          />
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          ¡Bienvenido/a a nuestro sitio web! Somos un equipo apasionado dedicado a crear soluciones innovadoras y de vanguardia para nuestros clientes. Con más de 10 años de experiencia en la industria, hemos construido una reputación en la entrega de resultados de alta calidad que superan las expectativas de nuestros clientes. Nuestra misión es ayudar a las empresas a crecer y prosperar en el mundo digital, ofreciendo una amplia gama de servicios que incluyen diseño web, desarrollo web, marketing digital y branding. Nuestro equipo de expertos utiliza las últimas tecnologías y las mejores prácticas de la industria para crear soluciones únicas e impactantes que generan resultados.
        </p>
        <button>
          <Link
            href="#"
            className="flex items-center justify-center sm:justify-start lg:justify-center w-1/2 px-6 py-3 text-lg font-semibold text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-lg hover:bg-gray-700 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-offset-opacity-50 focus:scale-105 focus:-translate-y-1"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default AboutUsSection;
