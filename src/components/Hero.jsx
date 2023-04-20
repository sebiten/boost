import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { useBoost } from "@/hooks/useBoost";
import { motion } from "framer-motion";

const Hero = () => {
  const { isClicked, setIsClicked } = useBoost();

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          preload
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
        <div className="sm:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="sm:w-1/2 mx-auto flex items-center justify-center"
          >
            <Image
              width={1920}
              height={1080}
              src="/boost.webp"
              priority="true"
              alt="Logo"
              className="object-cover object-center sm:w-[400px] lg:w-[400px] xl:w-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mt-8"
          >
            <h1 className="font-bold tracking-tight text-white text-xl md:text-2xl xl:w-[700px]">
              <span className="block xl:inline">
                Acelera el crecimiento de tu empresa con nuestros servicios de
              </span>
              <span className="block text-gray-400 xl:inline">
                {" "}
                Diseño, Creación de Páginas Web y Marketing Digital
              </span>
            </h1>

            <div className="mt-8 flex xs:flex sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-3 md:text-lg md:px-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Comenzar ahora
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-700 sm:mt-0 md:py-3 md:text-lg md:px-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Contactanos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
