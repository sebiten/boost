import Image from "next/image";
import { useState } from "react";
import { useBoost } from "@/hooks/useBoost";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { darkMode } = useBoost();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );
    if (response.ok) {
      alert("¡Gracias por tu mensaje!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert(
        "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <section
      id="contacto"
      className={
        darkMode ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
      }
    >
      <div className="flex w-full  justify-center items-center pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1.5 }}
          className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gray-700 w-full max-w-5xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden"
        >
          <div className="flex flex-col md:flex-1 space-y-8 justify-between">
            <div>
              <h1 className="text-4xl tracking-wide">Contacto</h1>
              <p className="pt-2 text-green-100 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                molestiae cupiditate nulla facere
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-green-300 text-xl"
                ></ion-icon>
                <span>+91 1234567890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-green-300 text-xl"
                ></ion-icon>
                <span>support@test.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-green-300 text-xl"
                ></ion-icon>
                <span>BKC, Mumbai</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-gray-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-gray-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 -z-10"
              >
                <div>
                  <label htmlFor="name" className="text-sm">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block self-end bg-green-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
// <form
//   className={`w-full mx-auto py-16  ${
//     darkMode ? "bg-gray-50 " : "bg-gray-800"
//   }`}
//   onSubmit={handleSubmit}
// >
//   <div>
//     {darkMode ? (
//       <Image
//         src="/logo.png"
//         alt="Logo Boost"
//         width={200}
//         height={50}
//         className="mx-auto invert rounded-full"
//       />
//     ) : (
//       <Image
//         src="/boost.png"
//         alt="Logo Boost"
//         width={200}
//         height={50}
//         className="mx-auto"
//       />
//     )}

//     <p
//       className={
//         darkMode
//           ? "text-gray-900 text-center text-2xl font-bold mb-10"
//           : "text-white text-center text-2xl font-bold mb-10"
//       }
//     >
//       ¡Contáctanos y potencia tu negocio!
//     </p>
//   </div>
//   <div className={`w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 `}>
//     <div className="mb-6">
//       <label
//         className={
//           darkMode
//             ? "block text-gray-700 font-bold mb-2"
//             : "block text-white font-bold mb-2"
//         }
//         htmlFor="name"
//       >
//         Nombre Completo <span className="text-red-500">*</span>
//       </label>
//       <input
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="name"
//         type="text"
//         placeholder="Ingresa tu nombre completo"
//         required
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//     <div className="mb-6">
//       <label
//         className={
//           darkMode
//           ? "block text-gray-700 font-bold mb-2"
//             : "block text-white font-bold mb-2"
//         }
//         htmlFor="email"
//       >
//         Correo Electrónico <span className="text-red-500">*</span>
//       </label>
//       <input
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="email"
//         type="email"
//         placeholder="Ingresa tu correo electrónico"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//     <div className="mb-8">
//       <label
//         className={
//           darkMode
//           ? "block text-gray-700 font-bold mb-2"
//             : "block text-white font-bold mb-2"
//         }
//         htmlFor="message"
//       >
//         Mensaje <span className="text-red-500">*</span>
//       </label>
//       <textarea
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="message"
//         placeholder="Escribe tu mensaje aquí"
//         required
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//     </div>
//     <div className="flex items-center justify-center">
//       <button
//         className={`bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//           darkMode ? "bg-gray-900 hover:bg-gray-700" : ""
//         }`}
//         type="submit"
//       >
//         Enviar
//       </button>
//     </div>
//   </div>
// </form>
