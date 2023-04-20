import React from "react";
import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Link from "next/link";
import { useBoost } from "@/hooks/useBoost";

const AboutUsSection = () => {
  const { darkMode } = useBoost();

  return (
    <section
      className={
        darkMode
          ? "bg-gray-50 pt-32 pb-14 px-4 sm:px-6 lg:px-8 "
          : "bg-gray-800 pt-32 pb-14 px-4 sm:px-6 lg:px-8"
      }
    >
      <div className="flex flex-wrap mx-auto max-w-7xl">
        <div className="w-full md:w-1/2 lg:w-1/3 md:mb-0">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/rock2.png"
              width={400}
              height={400}
              alt="About Us"
              className="transition duration-500 ease-in-out transform hover:scale-105 w-[400px] mx-auto my-auto "
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/3 xl:w-8/12 mx-auto my-auto pl-0 flex flex-col">
          <h2
            className={
              darkMode ? "text-gray-800 text-3xl " : "text-gray-50 text-3xl"
            }
          >
            Sobre nosotros
            <BsFillRocketTakeoffFill
              className="inline-block text-4xl text-gray-800"
              style={{ marginLeft: "1rem" }}
            />
          </h2>
          <p
            className={
              darkMode
                ? "text-sm text-gray-800 my-2"
                : "text-sm text-gray-50 my-2"
            }
          >
            ¡Bienvenido/a a nuestro sitio web! Somos un equipo apasionado
            dedicado a crear soluciones innovadoras y de vanguardia para
            nuestros clientes. Nuestra misión es ayudar a las empresas a crecer y
            prosperar en el mundo digital, ofreciendo una amplia gama de
            servicios que incluyen diseño web, desarrollo web, marketing digital
            y branding. Nuestro equipo de expertos utiliza las últimas
            tecnologías y las mejores prácticas de la industria para crear
            soluciones únicas e impactantes que generan resultados.
          </p>
          <button>
            <Link
              href="#"
              className={`flex items-center justify-center sm:justify-start lg:justify-center w-1/2 px-6 py-3 text-lg font-semibold transition duration-500 ease-in-out transform rounded-lg hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-offset-opacity-50 focus:scale-105 focus:-translate-y-1 ${
                darkMode
                  ? "bg-gray-800 text-gray-50 my-2 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-900 my-4 hover:bg-gray-200"
              }`}
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
