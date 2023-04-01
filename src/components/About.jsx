import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center mb-10">
          <img className="w-16 h-16 mr-4" src="https://via.placeholder.com/80x80" alt="Logo Boost Digital Solutions" />
          <h2 className="text-3xl font-semibold">Sobre Nosotros</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              En Boost Digital Solutions, nos apasiona ayudar a las empresas a alcanzar su máximo potencial en línea. Con más de 10 años de experiencia en el campo, nuestro equipo de expertos se ha dedicado a ofrecer soluciones personalizadas y de alta calidad en el desarrollo web, diseño de imagen empresarial, marketing digital y mucho más.
            </p>
            <p className="text-lg mb-4">
              Sabemos que cada empresa es única, por lo que trabajamos estrechamente con nuestros clientes para comprender sus necesidades específicas y ofrecer soluciones que se adapten a sus objetivos y presupuestos. Nos enorgullece nuestro compromiso con la satisfacción del cliente y siempre nos esforzamos por superar las expectativas.
            </p>
            <p className="text-lg">
              ¡Permítenos ayudarte a llevar tu empresa al siguiente nivel en línea!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img src="https://via.placeholder.com/500x500" alt="Equipo de Boost Digital Solutions" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 opacity-75 absolute top-0 left-0 w-full h-full z-0"></div>
    </div>
  );
};

export default About;
