import Link from "next/link";
import { useBoost } from "@/hooks/useBoost";
import Image from "next/image";
const Footer = () => {
  const { darkMode } = useBoost();
  return (
    <footer className={
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Boost Digital Solutions
            </h2>
            <p className="text-sm mb-4">
              Somos una startup enfocada en soluciones digitales innovadoras
              para ayudar a las empresas a mejorar su presencia en línea y
              aumentar sus ventas.
            </p>
            <p className="text-sm mb-4">
              <a href="#" className="text-green-500 hover:text-green-600">
                Contáctanos
              </a>{" "}
              para obtener más información.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Productos y servicios
            </h2>
            <ul className="text-sm">
        
              <li className="mb-2">
                <Link href="/planes">Planes</Link>
              </li>
              <li className="mb-2">
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Nuestro equipo</h2>
            <ul className="text-sm">
              <li className="mb-2">Sebastian Burgos - CEO</li>
              <li className="mb-2">María García - CMO</li>
              <li className="mb-2">Carlos González - CTO</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Síguenos en las redes sociales
            </h2>
            <ul className="flex items-center text-lg">
              <Link 
                href='https://www.instagram.com/boost.digitals/'
              className="mr-4">
               <Image
                  src="/instagram.webp"
                  alt="Boost Digital Solutions"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href='/'
                className="mr-4">
                <Image
                  src="/logo.png"
                  alt="Boost Digital Solutions"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Link>
              <li className="mr-4">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
