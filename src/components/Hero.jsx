import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useBoost } from "@/hooks/useBoost";

const Hero = () => {
  const { isClicked, setIsClicked } = useBoost();
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videobg2.ogv" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pt-44 lg:px-24 py-20 flex flex-col justify-center">
        <div className="sm:flex sm:pt-32 lg:p-0">
          <div className="sm:w-1/2 mx-auto">
            <Image
              data-aos="fade-right"
              data-aos-delay="100"
              width={1920}
              height={1080}
              src="/boost.png"
              priority={true}
              alt="Logo"
              className="object-cover object-center sm:w-[400px] lg:w-[400px] xl:w-[500px]"
            />
          </div>
          <div className="sm:w-1/2 mx-auto my-auto flex flex-col gap-10 mb-14">
            <h1
              data-aos="fade-left"
              className="font-bold tracking-tight text-white text-2xl md:text-3xl"
            >
              <span className="block xl:inline">
                Acelera el crecimiento de tu empresa con nuestros servicios de
              </span>
              <span className="block text-gray-400 xl:inline">
                {" "}
                Diseño, Creación de Páginas Web y Marketing Digital
              </span>
            </h1>
            <div
              data-aos="fade-up"
              className=" lg:mt-4 xl:mt-0 sm:flex sm:justify-center lg:justify-start gap-4"
            >
              <Link
                href="#"
                className="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Comenzar ahora
              </Link>
              <Link
                href="#"
                className="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-700 mt-3 sm:mt-0 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Contactanos
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
