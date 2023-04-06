import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBoost } from "@/hooks/useBoost";

function Navbar() {
  const { isClicked, setIsClicked, darkMode, setDarkMode } = useBoost();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-10 bg-transparent py-4 md:py-6 lg:py-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center p-2">
          {darkMode ? (
            <Image
              src="/logo.png"
              alt="Logo Boost"
              width={100}
              height={50}
              className="mx-auto invert
               rounded-full
               "
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            />
          ) : (
            <Image
              src="/boost.png"
              alt="Logo Boost"
              width={110}
              height={50}
              className="mx-auto
              rounded-full

            "
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            />
          )}
          {isClicked && (
            <div className="absolute top-0 left-24 mt-10 w-[400px] h-[300px] bg-black opacity-80 z-10 rounded-xl">
              <h3
                data-aos="fade-up"
                className="text-white text-2xl text-center pt-20"
              >
                Follow us on Instagram to see our latest work!
              </h3>
              <div className="flex justify-center">
                <h3
                  href="https://www.instagram.com/boost.digitals/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    data-aos="fade-up"
                    width={100}
                    height={100}
                    src="/instagram.webp"
                    alt="Instagram logo"
                    className="rounded-full opacity-80 hover:opacity-100 transition duration-500 mt-6 transform cursor-pointer hover:animate-pulse hover:scale-110 "
                  />
                </h3>
              </div>
              <p>Or tal with us on whatsapp</p>
            </div>
          )}
        </div>
        <div className="md:hidden px-4">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          {darkMode ? (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-transparent text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              🌙
            </button>
          ) : (
            <button
              className="bg-transparent text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              🌞
            </button>
          )}

          <Link
            href="#contact"
            className="bg-white text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Planes
          </Link>
          <Link
            href="#contact"
            className="bg-white text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Sobre nosotros
          </Link>
          <Link
            href="#contact"
            className="bg-white text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" bg-black py-2">
          <Link
            href="#services"
            className="block text-white mx-4 my-2 font-semibold text-lg hover:text-gray-400 transition duration-300"
          >
            Servicios
          </Link>
          <Link
            href="#portfolio"
            className="block text-white mx-4 my-2 font-semibold text-lg hover:text-gray-400 transition duration-300"
          >
            Planes
          </Link>
          <Link
            href="#contact"
            className="block bg-white text-black mx-4 my-2 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
