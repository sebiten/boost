import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black py-4 md:py-6 lg:py-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            width={120}
            height={120}
            src="/logo.png"
            alt="Boost logo"
            className="rounded-full"
          />
        </div>
        <div className="md:hidden">
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
            href="#services"
            className="text-white mx-4 font-semibold text-lg hover:text-gray-400 transition duration-300"
          >
            Servicios
          </Link>
          <Link
            href="#portfolio"
            className="text-white mx-4 font-semibold text-lg hover:text-gray-400 transition duration-300"
          >
            Planes
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
