import Image from 'next/image'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    Aos.init({duration: 1200});
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          width={1920}
          height={1080}
          src='/logo.png'
          alt="Hero image"
          className='object-cover object-center h-full'
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 data-aos="fade-down" className="text-4xl font-bold text-white text-center sm:text-5xl lg:text-6xl">
          Bienvenidos a mi Startup
        </h1>
        <p data-aos="fade-up" className="mt-4 max-w-2xl text-xl text-white text-center mx-auto">
          Una descripción breve de la Startup y lo que ofrece a sus clientes potenciales.
        </p>
        <div data-aos="fade-right" className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Comenzar ahora
            </a>
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-700 mt-3 sm:mt-0 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Aprender más
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
