import Image from "next/image";
import { useState } from "react";
import { useBoost } from "@/hooks/useBoost";

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
    <form
      className={`w-full mx-auto py-24  ${
        darkMode ? "bg-gray-50 " : "bg-gray-800"
      }`}
      onSubmit={handleSubmit}
    >
      <div>
        {darkMode ? (
          <Image
            src="/logo.png"
            alt="Logo Boost"
            width={200}
            height={50}
            className="mx-auto invert rounded-full"
          />
        ) : (
          <Image
            src="/boost.png"
            alt="Logo Boost"
            width={200}
            height={50}
            className="mx-auto"
          />
        )}

        <p
          className={
            darkMode
              ? "text-gray-900 text-center text-2xl font-bold mb-10"
              : "text-white text-center text-2xl font-bold mb-10"
          }
        >
          ¡Contáctanos y potencia tu negocio!
        </p>
      </div>
      <div className={`w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="mb-6">
          <label
            className={
              darkMode
                ? "block text-gray-700 font-bold mb-2"
                : "block text-white font-bold mb-2"
            }
            htmlFor="name"
          >
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ingresa tu nombre completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className={
              darkMode
              ? "block text-gray-700 font-bold mb-2"
                : "block text-white font-bold mb-2"
            }
            htmlFor="email"
          >
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            className={
              darkMode
              ? "block text-gray-700 font-bold mb-2"
                : "block text-white font-bold mb-2"
            }
            htmlFor="message"
          >
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Escribe tu mensaje aquí"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              darkMode ? "bg-gray-900 hover:bg-gray-700" : ""
            }`}
            type="submit"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
