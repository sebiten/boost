import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="flex mx-auto">
        <div className="flex flex-wrap items-center">
          <div
            className="
              max-w-6xl mx-auto
              "
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/rock2.png"
                width={400}
                height={400}
                alt="About Us"
                className="transition duration-500 ease-in-out transform hover:scale-105 w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 pl-0 md:pl-16 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ¡Bienvenido/a a nuestro sitio web! Somos un equipo apasionado
              dedicado a crear soluciones innovadoras y de vanguardia para
              nuestros clientes. Con más de 10 años de experiencia en la
              industria, hemos construido una reputación en la entrega de
              resultados de alta calidad que superan las expectativas de
              nuestros clientes. Nuestra misión es ayudar a las empresas a
              crecer y prosperar en el mundo digital, ofreciendo una amplia gama
              de servicios que incluyen diseño web, desarrollo web, marketing
              digital y branding. Nuestro equipo de expertos utiliza las últimas
              tecnologías y las mejores prácticas de la industria para crear
              soluciones únicas e impactantes que generan resultados.
            </p>
            <div
              className="
              max-w-6xl mx-auto
              "
            >
              <Image
                src="/rocket.png"
                width={400}
                height={400}
                alt="About Us"
                className="transition duration-500 ease-in-out transform hover:scale-105 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
