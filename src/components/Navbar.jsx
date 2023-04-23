import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBoost } from "@/hooks/useBoost";
import { motion } from "framer-motion";

function Navbar() {
  const { isClicked, setIsClicked, darkMode, setDarkMode } = useBoost();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-10 bg-transparent py-4 md:py-6 lg:py-2">
      <div className="w-full flex items-center justify-between">
        <motion.div
         initial={{ opacity: 0}}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
          className="flex items-center p-2"
        >
          {darkMode ? (
            <Image
              src="/logo.webp"
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
              src="/boost.webp"
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
            <div className="absolute top-0 left-24 mt-10 w-[300px] h-[200px] bg-black opacity-80 z-10 rounded-xl">
              <h3 className="text-white text-2xl text-center mt-10">
                Siguenos en instagram!
              </h3>
              <Link
                href="https://www.instagram.com/boost.digitals/"
                className="flex items-center justify-center my-10 hover:scale-125"
              >
                <Image
                  height={50}
                  width={50}
                  alt="instagram-logo"
                  src="/instagram.webp"
                />
              </Link>
            </div>
          )}
        </motion.div>
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
        <div className="hidden md:flex items-center z-50">
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
            href="#planes"
            className="bg-white text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Planes
          </Link>

          <Link
            href="#contacto"
            className="bg-white text-black mx-4 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" bg-black py-2">
          <Link
            href="#planes"
            className="block text-white mx-4 my-2 font-semibold text-lg hover:text-gray-400 transition duration-300"
          >
            Planes
          </Link>
          <Link
            href="#contacto"
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
