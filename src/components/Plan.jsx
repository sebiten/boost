import Image from "next/image";
import Link from "next/link";
import React from "react";

function Plan() {
  return (
    <div className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-black opacity-70 h-full "></div>
      <div className="absolute inset-0 -z-20">
        <Image
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          src="/tech.webp"
          alt="hero"
        />
      </div>
      <div className="relative pb-10 flex flex-col items-center justify-center ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-6/12 px-4">
              <div className="lg:text-center">
                <h2 className="text-base text-gray-500 font-semibold tracking-wide uppercase">
                  ¿No encontraste lo que buscabas?
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                  Creamos planes personalizados
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Sabemos que cada cliente es único y tiene necesidades
                  específicas. Por eso, podemos crear un plan personalizado
                  especialmente para ti y tu negocio.
                </p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="mailto:sebdevspace@gmail.com?subject=Plan personalizado&body=Hola, me gustaría saber más sobre los planes personalizados."
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
