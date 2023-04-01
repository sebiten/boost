import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBoost } from "@/hooks/useBoost";

function Navbar() {
  const { isClicked, setIsClicked } = useBoost();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-10 bg-transparent py-4 md:py-6 lg:py-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center p-2">
          <Image
            onClick={() => setIsClicked(!isClicked)}
            width={80}
            height={80}
            src="/logonav.png"
            alt="Boost logo"
            className="rounded-full opacity-80 hover:opacity-100 transition duration-300 cursor-pointer hover:animate-pulse"
          />
          {isClicked && (
            <div className="absolute top-0 left-24 mt-10 w-[400px] h-[300px] bg-black opacity-80 z-10 rounded-xl">
              <h3
                data-aos="fade-up"
                className="text-white text-2xl text-center pt-20"
              >
                Follow us on Instagram to see our latest work!
              </h3>
              <div className="flex justify-center">
                <a
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
                </a>
              </div>
              <p>Or tal with us on whatsapp</p>
            </div>
          )}
        </div>
        <div className="md:hidden px-4">
          {isMenuOpen ? (
            <button className="text-white text-xl" onClick={handleMenuToggle}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          ) : (
            <button className="text-white text-xl" onClick={handleMenuToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>
        <div className="hidden md:flex items-center">
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
        <div className="md:hidden bg-black py-2">
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
